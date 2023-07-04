import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('should render footer correctly', () => {
        // Render the component
        const { container } = render(<Footer />);

        // Expect the footer element to be rendered
        const footerElement = container.querySelector('footer');
        expect(footerElement).toBeInTheDocument();
    });
});
