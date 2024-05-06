import React from "react";
import './App.css';
import Header from './Header';
import avatar from './avatar.jpg';

function Home(){
    return (
        <div>
            <Header/>
            <br></br>
            <h2>Home</h2>
            <img src={avatar} alt="Avatar" height={145} width={200} />
            <br></br><br></br>
        </div>
    );
}

export default Home;