import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Authentication from './Authentication';

jest.mock('react-redux');
jest.mock('../Error/Error', () => () => <div>Not Authenticated</div>);

const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

describe('Authentication', () => {
    it('should render children when authenticated', () => {
        // Mock the useSelector hook to return authenticated state
        mockUseSelector.mockReturnValue(true);

        // Render the component
        const { getByText } = render(
            <Authentication>
                <div>Child Component</div>
            </Authentication>
        );

        // Expect the children to be rendered
        expect(getByText('Child Component')).toBeInTheDocument();
    });

    it('should render Error component when not authenticated', () => {
        // Mock the useSelector hook to return unauthenticated state
        mockUseSelector.mockReturnValue(false);

        // Render the component
        const { getByText } = render(<Authentication />);

        // Expect the Error component to be rendered
        expect(getByText('Not Authenticated')).toBeInTheDocument();
    });
});
