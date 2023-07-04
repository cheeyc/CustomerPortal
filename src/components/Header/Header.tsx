import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/logo192.png" alt="Logo"/>
                <h1>Customer Portal</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
