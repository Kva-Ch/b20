import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
// import {App} from "./App";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Profile from "../components/Profile.jsx";

function ProfileScreen(props) {
    return (
    <div>
        <Header />
        <Profile /> 
        <Footer />
    </div>);
}

export default ProfileScreen;