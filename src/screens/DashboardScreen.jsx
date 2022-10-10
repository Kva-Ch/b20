import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import Dashboard from "../components/dashboard/Dashboard.jsx";
import WeekBarGraph from "../components/dashboard/WeekBarGraph.jsx";

function DashboardScreen(props) {
    return (<div>
        <Header />
        <Dashboard />
        <Footer />
    </div>);
}

export default DashboardScreen;
