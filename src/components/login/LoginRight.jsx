import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {generatePath, useNavigate} from 'react-router';
import LoginBox from './LoginBox';
import SignupBox from './SignupBox';

function LoginRight(props) {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");
    const [status, setStatus] = useState(false);
    let navigate = useNavigate();
    // const handlesubmit = (e) => {};
    // const handlesubmit1 = (e) => {};

    function swap(value){
        console.log(value);
        setStatus(value);
    }

   return (
   <div className='grey1'>
    {!status?<LoginBox setStatus={swap} status={status}/>: <SignupBox setStatus={swap} status={status}/>}
   </div>);
}

export default LoginRight;