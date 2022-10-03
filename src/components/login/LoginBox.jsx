import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {generatePath, useNavigate} from 'react-router';
import loginApi from "../../controllers/loginApi.jsx";

function LoginBox(props) {

    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [clicked, setClicked] = useState(false);
    let navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        // do the login api call here
        const res = await loginApi(username, pwd);
        if(res === 200){
          navigate('/home');
        } else if(res === 400) {
          navigate('/');
        } else {
          navigate('/');
        }
    };
    const swap = (e) => {
        console.log("hello")
    };
        return (
        <div className="box">
            <h1 className = "greetings">Hey there!</h1>
            <form className="login" onSubmit={handlesubmit}>
                <br/>
                <input type="text" className="inputfield" value={username} placeholder="Email" onChange={(e) => setUsername(e.target.value)} required="required"/><br/>
                <br/>
                <input type="password" className="inputfield" value={pwd} placeholder="Password" onChange={(e) => setPwd(e.target.value)} required="required"/><br/>
                <br/>
                <input className='btn btn-lg btn-dark button' type="submit" value="Log In"/>
            </form><br/><br/>
            <p>Not with us?<button onClick={() => props.setStatus(true)} className = "swapbtn">Sign Up</button></p>
        </div>
        );
}

export default LoginBox;
