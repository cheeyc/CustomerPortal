import React from 'react';
import { render } from '@testing-library/react';
import UserLogin from './UserLogin';

jest.mock('react-router-dom', () => ({useHistory: () => ({push: jest.fn()})}));
jest.mock('react-redux');
jest.mock('@react-oauth/google', () => ({GoogleLogin: () => <div>Google Login</div>}));
jest.mock('../Error/Error', () => () => <div>Error</div>);
describe('UserLogin', () => {
    it('should render without errors', () => {
        const { container } = render(<UserLogin />);
        expect(container).toBeTruthy();
    });
});
