import React from "react";
import './App.css';
import Header from './Header';

function Login(){
    return (
        <div className="login">
            <Header/>
            <br></br>
            <h2>Login</h2>
        <form>
            <label>Username :</label>&nbsp;
            <input type="text" id="username" name="username" />
            <br></br><br></br>
            <label>Password :</label>&nbsp;
            <input type="password" id="password" name="password" />
            <br></br><br></br>
            <input type="submit"></input>
        </form>
        <br></br>
        </div>
    );
}

export default Login;