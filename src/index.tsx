import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./state/Store";
import {GoogleOAuthProvider} from "@react-oauth/google";
import Authentication from "./components/Authentication/Authentication";
import Home from "./components/Home/Home";
import UserLogin from "./components/Login/UserLogin";

const clientId: string = process.env.REACT_APP_CLIENT_ID || '';

ReactDOM.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
            <Provider store={store}>
                    <App/>
            </Provider>
        </GoogleOAuthProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
