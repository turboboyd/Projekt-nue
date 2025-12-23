import React, { ReactNode, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import styles from './Modal.module.scss';
import { useModal, useModalFocus } from './lib';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;

    lazy?: boolean;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    autoFocus?: boolean;
}

const ANIMATION_DELAY = 250;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen = false,
        onClose,
        lazy = true,
        closeOnEsc = true,
        closeOnOverlayClick = true,
        autoFocus = true,
    } = props;

    const portalTarget = useMemo(
        () => (typeof document !== 'undefined' ? document.body : null),
        [],
    );

    const contentRef = useRef<HTMLDivElement | null>(null);

    const { isClosing, close } = useModal({
        isOpen,
        onClose,
        animationDelay: ANIMATION_DELAY,
    });

    useModalFocus({
        isOpen,
        isClosing,
        closeOnEsc,
        autoFocus,
        onClose: close,
        containerRef: contentRef,
    });

    const onOverlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!closeOnOverlayClick || isClosing) return;
        if (e.target === e.currentTarget) close();
    };

    const shouldRender = isOpen || isClosing;
    if (lazy && !shouldRender) return null;

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const modal = (
        <div
            className={classNames(styles.Modal, mods, [className])}
            role="dialog"
            aria-modal="true"
        >
            <button type="button" className={styles.overlay} onClick={onOverlayClick}>
                <div
                    className={classNames(styles.content, { [styles.contentOpened]: isOpen }, [])}
                    ref={contentRef}
                    tabIndex={-1}
                >
                    <Button
                        className={styles.closeBtn}
                        theme={ButtonTheme.CLEAR}
                        square
                        size={ButtonSize.L}
                        onClick={close}
                        aria-label="Close"
                        disabled={isClosing}
                    // eslint-disable-next-line i18next/no-literal-string
                    >
                        X
                    </Button>
                    {children}
                </div>
            </button>
        </div>
    );

    return portalTarget ? createPortal(modal, portalTarget) : modal;
};
