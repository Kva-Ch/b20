import React, {Component} from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';

import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );

function YearLineChart(props) {
  let numberOfYears = new Date().getFullYear() - 1995;
  const labels = Array.from({
    length: numberOfYears
  }, (_, i) => i + 1996)
  console.log("data:", props.acrossYearsInfo);
  const data = {
    labels: labels,
    datasets: [
      {
        data: props.acrossYearsInfo,
        //   fill: true,
        //   backgroundColor: "#D5D5D5",
        borderColor: "#000000"
      }
    ]
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top'
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart',
      //   color: 'red',
      // },
      labels: {
        color: 'red',
        size: '40px',
        textColor: 'red'
      }
    }
  }

  return (<div className="App">
    <Line data={data} options={options}/>
  </div>);
}

export default YearLineChart;
