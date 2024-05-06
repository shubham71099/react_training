import React from "react";
import './App.css';
import {Link } from "react-router-dom";

function Header(){
    return (
        
        <div className="header">
                       
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default Header;