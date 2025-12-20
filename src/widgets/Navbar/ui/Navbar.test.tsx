import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Navbar';

jest.mock('shared/lib', () => ({
    classNames: (...args: any[]) => args.filter(Boolean).join(' '),
}));

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Navbar', () => {
    test('renders Home and About links with correct hrefs', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    });

    test('applies passed className to root', () => {
        const { container } = render(
            <MemoryRouter>
                <Navbar className="customClass" />
            </MemoryRouter>,
        );

        expect(container.firstElementChild).toHaveClass('customClass');
    });
});
