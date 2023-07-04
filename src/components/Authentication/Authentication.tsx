import React from 'react';
import {useSelector} from 'react-redux';
import Error from "../Error/Error";

const Authentication: React.FC = ({children}) => {
    const isAuthenticated = useSelector((state: any) => state.authReducer.isAuthenticated);

    return isAuthenticated ? <>{children}</> :<Error error={"Not Authenticated"}/>;
};

export default Authentication;
