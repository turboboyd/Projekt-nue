import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Loader from './Loader';

describe('Loader', () => {
    test('renders loader root element', () => {
        const { container } = render(<Loader />);
        // root is the first div rendered by Loader
        expect(container.firstElementChild).toBeInTheDocument();
    });

    test('applies passed className to root', () => {
        const { container } = render(<Loader className="customClass" />);
        const root = container.firstElementChild as HTMLElement;

        expect(root).toHaveClass('customClass');
    });

    test('renders 8 roller elements', () => {
        const { container } = render(<Loader />);
        const allDivs = container.querySelectorAll('div');
        expect(allDivs.length).toBe(10);
    });
});
