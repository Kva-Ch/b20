import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
// import {App} from "./App";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import Home from "../components/homepage/Home.jsx";

function HomeScreen(props) {
  return (<div>
    <Header/>
    <Home />
    <Footer/>
  </div>);
}

export default HomeScreen;
