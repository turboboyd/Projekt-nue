import {
    useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalOptions {
    isOpen: boolean;
    onClose?: () => void;
    animationDelay: number;
}

export function useModal(options: UseModalOptions) {
    const { isOpen, onClose, animationDelay } = options;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearCloseTimer = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const close = useCallback(() => {
        if (!onClose || isClosing) return;

        setIsClosing(true);
        clearCloseTimer();

        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
            timerRef.current = null;
        }, animationDelay);
    }, [onClose, isClosing, clearCloseTimer, animationDelay]);

    useEffect(() => clearCloseTimer, [clearCloseTimer]);

    useEffect(() => {
        if (!isOpen) return;
        setIsClosing(false);
        clearCloseTimer();
    }, [isOpen, clearCloseTimer]);

    return {
        isClosing,
        close,
    };
}
