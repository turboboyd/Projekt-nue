import React, { useEffect, useRef } from 'react';
import { getFocusableElements } from './getFocusableElements';

interface UseModalFocusOptions {
    isOpen: boolean;
    isClosing: boolean;
    closeOnEsc: boolean;
    autoFocus: boolean;
    onClose: () => void;
    containerRef: React.RefObject<HTMLElement | null>;
}

export function useModalFocus(options: UseModalFocusOptions) {
    const {
        isOpen, isClosing, closeOnEsc, autoFocus, onClose, containerRef,
    } = options;

    const lastActiveElementRef = useRef<HTMLElement | null>(null);

    // autofocus + запомнить активный элемент
    useEffect(() => {
        if (!isOpen || isClosing) return undefined;

        lastActiveElementRef.current = document.activeElement as HTMLElement | null;
        if (!autoFocus) return undefined;

        const id = window.setTimeout(() => {
            const root = containerRef.current;
            if (!root) return;

            const focusables = getFocusableElements(root);
            if (focusables.length > 0) {
                focusables[0].focus();
            } else {
                root.focus();
            }
        }, 0);

        return () => {
            window.clearTimeout(id);
        };
    }, [isOpen, isClosing, autoFocus, containerRef]);

    // restore focus при закрытии
    useEffect(() => {
        if (isOpen) return undefined;

        const el = lastActiveElementRef.current;
        if (!el || typeof el.focus !== 'function') return undefined;

        const id = window.setTimeout(() => el.focus(), 0);

        return () => {
            window.clearTimeout(id);
        };
    }, [isOpen]);

    // Esc + focus trap
    useEffect(() => {
        if (!isOpen || isClosing) return undefined;

        const onKeyDown = (e: KeyboardEvent) => {
            if (closeOnEsc && e.key === 'Escape') {
                e.preventDefault();
                onClose();
                return;
            }

            if (e.key === 'Enter' || e.key === ' ') {
                const active = document.activeElement as HTMLElement | null;
                const isTyping = active?.tagName === 'INPUT'
                    || active?.tagName === 'TEXTAREA'
                    || active?.getAttribute?.('contenteditable') === 'true';

                if (!isTyping) {
                    e.preventDefault();
                    onClose();
                    return;
                }
            }

            if (e.key !== 'Tab') return;

            const root = containerRef.current;
            if (!root) return;

            const focusables = getFocusableElements(root);
            if (focusables.length === 0) {
                e.preventDefault();
                root.focus();
                return;
            }

            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement as HTMLElement | null;

            if (e.shiftKey) {
                if (active === first || !root.contains(active)) {
                    e.preventDefault();
                    last.focus();
                }
            } else if (active === last || !root.contains(active)) {
                e.preventDefault();
                first.focus();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, isClosing, closeOnEsc, onClose, containerRef]);
}
