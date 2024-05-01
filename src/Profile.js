import React, {useState} from "react";
import './App.css';
import axios from "axios";

function Profile(){

    const [userData,setUserData] = useState(null);
    const [error,setError] = useState(null);

    const fetchData = async(id) => {
        try{
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setUserData(response.data.data);
            setError(null);
        }
        catch(error){
            setError(error.response.data.error);
            setUserData(null);
        }
    };

    const handleButtonClick = async(id) => {
        if(id === 100){
            setError('Error occured. Please try again later.');
            setUserData(null);
        }else{
            await fetchData(id);
        }
    };


    return (

    <div className="button-block">
        <button onClick={() => handleButtonClick(1) }>1</button>
        <button onClick={() => handleButtonClick(2) }>2</button>
        <button onClick={() => handleButtonClick(3) }>3</button>
        <button onClick={() => handleButtonClick(4) }>4</button>
        <button onClick={() => handleButtonClick(100) }>100</button>

        <br></br>
        <div className="profile-text">
            <ul>
                <li>Email : {userData && userData.email}</li>
                <li>Name : {userData && `${userData.first_name} ${userData.last_name}`}</li>
                <br></br><br></br>
                {userData && <img src={userData.avatar} alt="N/A"/>}
            </ul>
            {error && <div>{error}</div>}
        </div>

        <div className="profile-image">

        </div>
              
    </div>
    
    );
}

export default Profile;