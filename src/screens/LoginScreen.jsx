import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
// import {App} from "./components/App";
import LoginLeft from "../components/login/LoginLeft.jsx";
import LoginRight from "../components/login/LoginRight.jsx";
import Footer from "../components/footer/Footer.jsx";

function LoginScreen(props) {
    return (<div className="loginscreen">
        <div className="row fullscreen">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <LoginLeft />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <LoginRight />
            </div>
        </div>
        <Footer />
    </div>);
}

export default LoginScreen;
