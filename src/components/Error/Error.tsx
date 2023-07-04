import React from 'react';
import UserLogin from "../Login/UserLogin";

interface Prop {
    error: string;
}

const Error: React.FC<Prop> = ({error}) => {
    return (
        <div>
            <UserLogin/>
            <h1>Error</h1>
            <p>An error occurred: {error}</p>
        </div>
    );
};

export default Error;
