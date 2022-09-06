import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Dashboard from "../components/Dashboard.jsx";

function DashboardScreen(props) {
    return (<div>
        <Header />
        <Dashboard />
        <Footer />
    </div>);
}

export default DashboardScreen;