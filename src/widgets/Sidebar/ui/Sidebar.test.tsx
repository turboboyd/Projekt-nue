import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { Sidebar } from './Sidebar';

jest.mock('widgets', () => ({
    ThemeSwitcher: () => <div data-testid="theme-switcher" />,
    LanguagesSwitcher: ({ collapsed }: { collapsed: boolean }) => (
        <div data-testid="lang-switcher" data-collapsed={String(collapsed)} />
    ),
}));

jest.mock('shared/assets/icons', () => ({
    // eslint-disable-next-line react/jsx-props-no-spreading
    MainIcon: (props: any) => <svg data-testid="main-icon" {...props} />,
    // eslint-disable-next-line react/jsx-props-no-spreading
    AboutIcon: (props: any) => <svg data-testid="about-icon" {...props} />,
}));

describe('Sidebar', () => {
    test('renders sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle adds/removes collapsed class', () => {
        componentRender(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        expect(sidebar).not.toHaveClass('collapsed');

        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);
        expect(sidebar).not.toHaveClass('collapsed');
    });

    test('links are present and route targets are correct', () => {
        componentRender(<Sidebar />);

        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThanOrEqual(2);

        expect(links.some((a) => a.getAttribute('href') === '/')).toBe(true);

        expect(links.some((a) => a.getAttribute('href') === '/about')).toBe(true);
    });

    test('collapsed state is passed to LanguagesSwitcher', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('lang-switcher')).toHaveAttribute('data-collapsed', 'false');

        fireEvent.click(screen.getByTestId('sidebar-toggle'));
        expect(screen.getByTestId('lang-switcher')).toHaveAttribute('data-collapsed', 'true');
    });
});
