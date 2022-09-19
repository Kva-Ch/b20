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

function YearBarGraph(props) {
    
        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

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
                data: [65, 59, 80, 81, 56, 34, 56, 76, 12, 56, 80, 23, ],
                barPercentage: 0.8,
                categoryPercentage: 1,
              
          }
            ]
          }
          
           const options = {
              responsive: true,

        //       tooltips: {
        //         title: props.year,
        //   }  
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



export default YearBarGraph;