import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
// import {App} from "./App";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function ProfileScreen(props) {
    return (
    <div>
        <Header />
        <Footer />
    </div>);
}

export default ProfileScreen;