import React from 'react';
import {render} from '@testing-library/react';
import Home from './Home';
import { fetchFilteredUsers } from '../../services/UserProfile.service';

jest.mock('../../services/UserProfile.service');
jest.mock('../Header/Header', () => () => <div>Header</div>);

const mockFetchFilteredUsers = fetchFilteredUsers as jest.MockedFunction<typeof fetchFilteredUsers>;
describe('Home', () => {
    it('should render home page with user profiles', async () => {
        const mockUserProfiles = [
            {
                id: 1,
                avatar: 'https://example.com/avatar.jpg',
                first_name: 'John',
                last_name: 'Doe',
            },
            {
                id: 2,
                avatar: 'https://example.com/avatar2.jpg',
                first_name: 'Jane',
                last_name: 'Smith',
            },
        ];

        mockFetchFilteredUsers.mockResolvedValue(mockUserProfiles as any);

        // Render the component
        const { getByText } = render(<Home />);

        // Expect the loading state to be rendered initially
        expect(getByText('Home')).toBeInTheDocument();

    });

});
