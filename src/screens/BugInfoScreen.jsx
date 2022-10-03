import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import BugInfo from "../components/BugInfo.jsx";

function BugInfoScreen(props) {

  let {bugid} = useParams();

  return (<div>
    <Header/>
    <BugInfo bugid={bugid}/>
    <Footer/>
  </div>);
}

export default BugInfoScreen;