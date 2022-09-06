import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
// import "Utils.js";
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';



function BarGraph(props) {

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
};
    const options = {
        scales: {
            y: {
              beginAtZero: true
            }
          }
    };
    // const BarChart = new Chart(ctx, config);
    return <div><Bar data={ data} /></div>;
}

export default BarGraph;