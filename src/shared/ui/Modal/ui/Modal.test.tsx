import React, { useState } from 'react';
import {
    render, screen, fireEvent, act,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from 'shared/ui/Button';
import { Modal } from './Modal';

jest.mock('shared/lib', () => ({
    classNames: (base: string, mods: Record<string, boolean> = {}, additional: string[] = []) => {
        const modClasses = Object.entries(mods)
            .filter(([, v]) => Boolean(v))
            .map(([k]) => k);
        return [base, ...modClasses, ...additional.filter(Boolean)].join(' ');
    },
}));

jest.mock('./Modal.module.scss', () => ({
    Modal: 'Modal',
    opened: 'opened',
    isClosing: 'isClosing',
    overlay: 'overlay',
    content: 'content',
    contentOpened: 'contentOpened',
    closeBtn: 'closeBtn',
}));

const ANIMATION_DELAY = 250;

describe('Modal', () => {
    let offsetParentSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.useFakeTimers();

        offsetParentSpy = jest
            .spyOn(HTMLElement.prototype, 'offsetParent', 'get')
            .mockImplementation(function offsetParentGetter() {
                return document.body.contains(this as any) ? (document.body as any) : null;
            });
    });

    afterEach(() => {
        offsetParentSpy.mockRestore();

        jest.useRealTimers();
    });

    test('renders when isOpen=true (portal into document.body)', () => {
        render(
            <Modal isOpen onClose={() => {}}>
                <div>Modal content</div>
            </Modal>,
        );

        expect(screen.getByText('Modal content')).toBeInTheDocument();
        expect(document.body.textContent).toContain('Modal content');
    });

    test('does not render when lazy=true and isOpen=false', () => {
        render(
            <Modal isOpen={false} onClose={() => {}}>
                <div>Hidden</div>
            </Modal>,
        );

        expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
    });

    test('does render when lazy=false and isOpen=false', () => {
        render(
            <Modal lazy={false} isOpen={false} onClose={() => {}}>
                <div>Still in DOM</div>
            </Modal>,
        );

        expect(screen.getByText('Still in DOM')).toBeInTheDocument();
    });

    test('clicking overlay triggers closing class and calls onClose after delay', () => {
        const onClose = jest.fn();

        render(
            <Modal isOpen onClose={onClose}>
                <div>Body</div>
            </Modal>,
        );

        const overlay = document.querySelector('.overlay') as HTMLDivElement | null;
        expect(overlay).not.toBeNull();

        fireEvent.click(overlay!);

        expect(onClose).not.toHaveBeenCalled();

        const root = document.querySelector('.Modal') as HTMLDivElement | null;
        expect(root).not.toBeNull();
        expect(root!).toHaveClass('isClosing');

        act(() => {
            jest.advanceTimersByTime(ANIMATION_DELAY);
        });

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('clicking inside content does NOT close', () => {
        const onClose = jest.fn();

        render(
            <Modal isOpen onClose={onClose}>
                <div>Inside</div>
            </Modal>,
        );

        const content = document.querySelector('.content') as HTMLDivElement | null;
        expect(content).not.toBeNull();

        fireEvent.click(content!);

        act(() => {
            jest.advanceTimersByTime(ANIMATION_DELAY);
        });

        expect(onClose).not.toHaveBeenCalled();
    });

    test('pressing Escape calls onClose after delay', () => {
        const onClose = jest.fn();

        render(
            <Modal isOpen onClose={onClose}>
                <div>ESC</div>
            </Modal>,
        );

        fireEvent.keyDown(window, { key: 'Escape' });

        expect(onClose).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(ANIMATION_DELAY);
        });

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('close Button calls onClose after delay', () => {
        const onClose = jest.fn();

        render(
            <Modal isOpen onClose={onClose}>
                <div>With Button</div>
            </Modal>,
        );

        const closeBtn = screen.getByLabelText('Close');
        fireEvent.click(closeBtn);

        expect(onClose).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(ANIMATION_DELAY);
        });

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('autofocus puts focus inside modal (close Button OR first focusable)', () => {
        render(
            <Modal isOpen onClose={() => {}} autoFocus>
                <div>
                    <Button>first</Button>
                    <Button>second</Button>
                </div>
            </Modal>,
        );

        act(() => {
            jest.advanceTimersByTime(0);
        });

        const content = document.querySelector('.content') as HTMLDivElement;
        expect(content).toBeInTheDocument();

        expect(content.contains(document.activeElement)).toBe(true);
    });

    test('restores focus to opener after close', () => {
        function Harness() {
            const [open, setOpen] = useState(false);

            return (
                <div>
                    <Button onClick={() => setOpen(true)}>Open modal</Button>

                    <Modal isOpen={open} onClose={() => setOpen(false)} autoFocus closeOnEsc>
                        <div>
                            <Button>inside</Button>
                        </div>
                    </Modal>
                </div>
            );
        }

        render(<Harness />);

        const opener = screen.getByText('Open modal');
        opener.focus();
        expect(opener).toHaveFocus();

        fireEvent.click(opener);

        act(() => {
            jest.advanceTimersByTime(0);
        });

        const content = document.querySelector('.content') as HTMLDivElement;
        expect(content.contains(document.activeElement)).toBe(true);

        fireEvent.keyDown(window, { key: 'Escape' });

        act(() => {
            jest.advanceTimersByTime(ANIMATION_DELAY);
        });

        act(() => {
            jest.advanceTimersByTime(0);
        });

        expect(opener).toHaveFocus();
    });
});
