import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import React, {useState, useEffect} from "react";
// import {App} from "./App";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Preferences from "../components/Preferences.jsx";

function PreferencesScreen(props) {

  return (<div>
    <Header/>
    <Preferences/>
    <Footer/>
  </div>);
}

export default PreferencesScreen;
