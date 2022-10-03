import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";

function HomeScreen(props) {
    return (<div>
        <Header/>
        <Home/>
        <Footer/>
      </div>);
}

export default HomeScreen;
