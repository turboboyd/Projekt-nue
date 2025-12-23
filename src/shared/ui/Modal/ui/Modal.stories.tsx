import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        autoFocus: true,
        lazy: false,
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Demo = () => {
    const [open, setOpen] = useState(true);

    return (
        <div style={{ padding: 24 }}>
            <button type="button" onClick={() => setOpen(true)}>
                Open
            </button>

            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <div style={{ padding: 24 }}>
                    Modal content
                    <div>
                        <button type="button" onClick={() => setOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export const Light: Story = {
    render: () => <Demo />,
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    render: () => <Demo />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
