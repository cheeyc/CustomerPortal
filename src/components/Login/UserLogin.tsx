import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import Error from "../Error/Error";

const UserLogin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                dispatch({type: 'AUTHENTICATION_ACTION', payload: {isAuthenticated: true, user: credentialResponse}});
                history.push('/home');
            }}
            onError={() => {
                return (<Error error={"Login Failed"}/>)
            }}
            useOneTap
        />
    );
};

export default UserLogin;
