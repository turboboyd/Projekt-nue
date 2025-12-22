import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui';

describe('className', () => {
    test('with only first param', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with clear theme ', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
