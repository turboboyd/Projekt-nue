import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ThemeSwitcher from './ThemeSwitcher';

jest.mock('app/providers', () => {
    const actual = jest.requireActual('app/providers');
    return {
        ...actual,
        Theme: {
            DARK: 'dark',
            LIGHT: 'light',
        },
        useTheme: jest.fn(),
    };
});

const { useTheme } = jest.requireMock('app/providers') as {
    useTheme: jest.Mock;
};

describe('ThemeSwitcher', () => {
    test('renders with aria-label for dark -> switch to light', () => {
        const toggleTheme = jest.fn();
        useTheme.mockReturnValue({ theme: 'dark', toggleTheme });

        render(<ThemeSwitcher />);

        const btn = screen.getByRole('button', { name: 'Switch to light theme' });
        expect(btn).toBeInTheDocument();
    });

    test('renders with aria-label for light -> switch to dark', () => {
        const toggleTheme = jest.fn();
        useTheme.mockReturnValue({ theme: 'light', toggleTheme });

        render(<ThemeSwitcher />);

        const btn = screen.getByRole('button', { name: 'Switch to dark theme' });
        expect(btn).toBeInTheDocument();
    });

    test('calls toggleTheme on click', () => {
        const toggleTheme = jest.fn();
        useTheme.mockReturnValue({ theme: 'light', toggleTheme });

        render(<ThemeSwitcher />);

        const btn = screen.getByRole('button', { name: 'Switch to dark theme' });
        fireEvent.click(btn);

        expect(toggleTheme).toHaveBeenCalledTimes(1);
    });

    test('applies external className', () => {
        const toggleTheme = jest.fn();
        useTheme.mockReturnValue({ theme: 'light', toggleTheme });

        const { container } = render(<ThemeSwitcher className="customClass" />);
        const btn = container.querySelector('button') as HTMLButtonElement;

        expect(btn).toHaveClass('customClass');
    });
});
