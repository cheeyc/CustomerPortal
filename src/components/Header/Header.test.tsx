import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
    it('should render header correctly', () => {
        // Render the component within a Router
        const { getByAltText, getByText } = render(
            <Router>
                <Header />
            </Router>
        );

        // Expect the logo image, heading, and navigation links to be rendered
        const logoImage = getByAltText('Logo');
        const heading = getByText('Customer Portal');
        const homeLink = getByText('Home');
        const aboutLink = getByText('About');
        const servicesLink = getByText('Services');
        const contactLink = getByText('Contact');

        expect(logoImage).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(servicesLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
    });
});
