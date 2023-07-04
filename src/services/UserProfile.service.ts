import {User, UserProfile} from "../model/User";

export const fetchFilteredUsers = async (): Promise<UserProfile[]> => {
    try {

        let page = 1;
        let totalPages = 0;
        const user: User[] = [];

        do {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`);
            const data: User = await response.json();
            totalPages = data.total_pages;

            user.push(data);
            page++;
        } while (page <= totalPages);


        const userProfiles: UserProfile[] = user.flatMap((user: User) => user.data);
        return userProfiles.filter((userProfile: UserProfile) => userProfile.first_name.startsWith('G') || userProfile.last_name.startsWith('W'));

    } catch (error) {
        console.error('Error fetching users:', error);
    }
    return [];
};
