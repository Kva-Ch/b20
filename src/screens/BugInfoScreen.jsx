import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import React, {useState, useEffect} from "react";
// import {App} from "./App";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import BugInfo from "../components/buginfo/BugInfo.jsx";

function BugInfoScreen(props) {

  let {bugid} = useParams();

  return (<div>
    <Header/>
    <BugInfo bugid={bugid}/>
    <Footer/>
  </div>);
}

export default BugInfoScreen;
