import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import BarGraph from './BarGraph';
import TaskMeter from './TaskMeter';
// import { Bar } from 'react-chartjs-2';

function Dashbaord(props) {
    
    return (<div>
        <div className="row">
            <div className="profileheading">Dashboard</div> 
            {/* <div className="bargraphdiv"><BarGraph/></div> */}
            <div className="taskmeterdiv"><TaskMeter /></div>
        </div>
        
    </div>);
}

export default Dashbaord;