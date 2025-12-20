import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui';

describe('className', () => {
    test('with only first param', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with clear theme ', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
