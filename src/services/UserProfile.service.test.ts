import {fetchFilteredUsers} from "./UserProfile.service";
import {UserProfile} from "../model/User";

describe('fetchFilteredUsers', () => {
    it('should fetch and filter users correctly', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                total_pages: 2,
                data: [
                    {
                        id: 1,
                        first_name: 'George',
                        last_name: 'Doe',
                    },
                    {
                        id: 2,
                        first_name: 'Jane',
                        last_name: 'Walker',
                    },
                ],
            }),
        } as unknown as Response);

        const filteredUsers = await fetchFilteredUsers();

        // Check the expected results
        expect(filteredUsers).toHaveLength(4);
        expect(filteredUsers[0]).toEqual({
            id: 1,
            first_name: 'George',
            last_name: 'Doe',
        });
        expect(filteredUsers[1]).toEqual({
            id: 2,
            first_name: 'Jane',
            last_name: 'Walker',
        });

        // Ensure that fetch was called with the correct URL
        expect(fetch).toHaveBeenCalledWith('https://reqres.in/api/users?page=1');
        expect(fetch).toHaveBeenCalledWith('https://reqres.in/api/users?page=2');
    });

    it('should return an empty array when no users are ends with W or starts with G', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                total_pages: 1,
                data: [
                    {
                        id: 1,
                        first_name: 'John',
                        last_name: 'Doe',
                    },
                    {
                        id: 2,
                        first_name: 'Jane',
                        last_name: 'Smith',
                    },
                ],
            }),
        } as unknown as Response);

        const filteredUsers: UserProfile[] = await fetchFilteredUsers();

        // Check the expected results
        expect(filteredUsers).toHaveLength(0);
        expect(fetch).toHaveBeenCalledWith('https://reqres.in/api/users?page=1');
    });

    it('should handle errors and return an empty array', async () => {
        // Mock the fetch function to throw an error
        global.fetch = jest.fn(() => Promise.reject(new Error('Fetch error')));

        const filteredUsers = await fetchFilteredUsers();

        // Check that an empty array is returned
        expect(filteredUsers).toHaveLength(0);
    });
});
