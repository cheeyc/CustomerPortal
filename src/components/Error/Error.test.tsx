import React from 'react';
import { render } from '@testing-library/react';
import Error from './Error';

jest.mock('../Login/Login', () => () => <div>Login</div>);
describe('Error', () => {
    it('should render error message correctly', () => {
        const error = 'An error occurred';

        // Render the component
        const { getByText } = render(<Error error={error} />);

        // Expect the error message and Login component to be rendered
        expect(getByText('Error')).toBeInTheDocument();
        expect(getByText(`An error occurred: ${error}`)).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument();
    });
});
