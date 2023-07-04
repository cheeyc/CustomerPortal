import React, {useEffect, useState} from 'react';
import {UserProfile} from "../../model/User";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {fetchFilteredUsers} from "../../services/UserProfile.service";

const Home = () => {
    const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);

    useEffect(() => {
        fetchFilteredUsers().then((userProfile: UserProfile[]) => {
            setUserProfiles(userProfile)
        }).catch((error: any) => {
            console.error(error)
        });
    }, []);

    return (
        <div>
            <Header/>
            <main>
                <h1>Home</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userProfiles.map((userProfile) => (
                        <tr key={userProfile.id}>
                            <td>
                                {userProfile.avatar && <img src={userProfile.avatar} alt="Avatar"/>}
                            </td>
                            <td>{userProfile.first_name}</td>
                            <td>{userProfile.last_name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;
