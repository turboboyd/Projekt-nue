import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import AppLink, { AppLinkTheme } from './AppLink';

const renderWithRouter = (ui: React.ReactElement, initialEntries: string[] = ['/']) => render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);

describe('AppLink', () => {
    test('renders link with children text', () => {
        renderWithRouter(<AppLink to="/about">About</AppLink>);

        expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    });

    test('renders correct href', () => {
        renderWithRouter(<AppLink to="/about">About</AppLink>);

        const link = screen.getByRole('link', { name: 'About' });
        expect(link).toHaveAttribute('href', '/about');
    });

    test('applies passed className', () => {
        renderWithRouter(
            <AppLink to="/" className="customClass">
                Home
            </AppLink>,
        );

        const link = screen.getByRole('link', { name: 'Home' });
        expect(link).toHaveClass('customClass');
    });

    test('uses PRIMARY theme by default', () => {
        renderWithRouter(<AppLink to="/">Home</AppLink>);

        const link = screen.getByRole('link', { name: 'Home' });

        expect(link.className).toContain('primary');
    });

    test('applies SECONDARY theme class when theme=SECONDARY', () => {
        renderWithRouter(
            <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                Home
            </AppLink>,
        );

        const link = screen.getByRole('link', { name: 'Home' });
        expect(link.className).toContain('secondary');
    });

    test('passes through Link props (target, rel)', () => {
        renderWithRouter(
            <AppLink to="/docs" target="_blank" rel="noreferrer">
                Docs
            </AppLink>,
        );

        const link = screen.getByRole('link', { name: 'Docs' });
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
    });
});
