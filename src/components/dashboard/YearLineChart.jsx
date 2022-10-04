import React, { Component } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const data = {
  labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      data: [33, 53, 85, 41, 44, 65,],
    //   fill: true,
    //   backgroundColor: "#D5D5D5",
      borderColor: "#F1F1F1"
    },

  ]
};

const options = {
    responsive: true,

    plugins: {
        legend: {
          position: 'top',
        },
        // title: {
        //   display: true,
        //   text: 'Chart.js Line Chart',
        //   color: 'red',
        // },
        labels: {
            color: 'red',
            size: '40px',
            textColor: 'red',
        }
      },
}

function YearLineChart() {
  return (
    <div className="App">
      <Line data={data} options={options} updateMode={'hide'}/>
    </div>
  );
}

export default YearLineChart;                      
