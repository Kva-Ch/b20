import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {generatePath, useNavigate} from 'react-router';

function SignupBox(props) {

    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");
    let navigate = useNavigate();
    const handlesubmit1 = (e) => {

        // do the sign up api call here

    };

        return (
            <div className="box">
                <h1 className = "greetings">Join the bugzilla community!</h1><br />
                <form className="login" onSubmit={handlesubmit1}>
                    <input type="text" className="inputfield" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} required="required"/><br/>
                    <input type="password" className="inputfield" value={pwd} placeholder="password" onChange={(e) => setPwd(e.target.value)} required="required"/>
                    <br/>
                    <input type="password" className="inputfield" value={cpwd} placeholder=" retype password" onChange={(e) => setCpwd(e.target.value)} required="required"/><br/>
                    <br/>
                    <input className='btn btn-lg btn-dark button' type="submit" value="Sign Up"/>
                </form>
                <br />
                <p>Already with us?<button onClick={() => props.setStatus(false)} className = "swapbtn">Login</button></p>
            </div>
        );
}

export default SignupBox;