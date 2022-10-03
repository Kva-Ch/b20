import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,

  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,

  );

function MonthBarGraph(props) {
    console.log("in month graph ");
    const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
        // console.log(props.numberOfDays)

        let labels = days.slice(0, parseInt(props.numberOfDays))

        const data = {
            labels: labels,

            datasets: [
              {
                label: 'bugs assigned',
                backgroundColor: '#F1F1F1',
                hoverBackgroundColor: '#D5D5D5',
                //barThickness: 60,
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 3,
                data: [65, 59, 80, 81, 56, 34, 56, 76, 12, 56, 80, 23, 34, 45, 67, 78, 87, 65, 41, 23, 38, 47, 76, 12, 56, 80, 23, 34, 45, 67, 78, ],
                barPercentage: 0.8,
                categoryPercentage: 1,

          }
            ]
          }

           const options = {
              responsive: true,
          }

              return (
                <div>
                  <Bar
                    data={data}
                    options={options}
                  />
                </div>
              );

          };



export default MonthBarGraph;
