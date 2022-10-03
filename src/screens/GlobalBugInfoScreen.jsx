import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import React, {useState, useEffect} from "react";
// import {App} from "./App";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import GlobalBugInfo from "../components/buginfo/GlobalBugInfo.jsx";

function GlobalBugInfoScreen(props) {

  let {bugid} = useParams();

  return (<div>
    <Header/>
    <GlobalBugInfo bugid={bugid}/>
    <Footer/>
  </div>);
}

export default GlobalBugInfoScreen;
