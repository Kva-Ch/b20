import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//
// } from 'chart.js';

// import { Chart, CategoryScale, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend} from 'chart.js'

// Chart.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//
// );

function WeekBarGraph(props) {
    const data = {
        labels: ['Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday'],

        datasets: [
          {
            label: 'bugs assigned',
            backgroundColor: '#F1F1F1',
            hoverBackgroundColor: '#D5D5D5',
            //barThickness: 60,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 3,
            data: [65, 59, 80, 81, 56, ],
            barPercentage: 0.4,
            categoryPercentage: 1,

      }
        ]
      }

       const options = {
          responsive: true,

          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
          },
          responsive: true,

          scales: {
            yAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "red",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "red",
                },
              },
            ],
            xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "red",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "red",
                  },
                },
              ],
            },
      }

          return (
            <div>
              <Bar
                data={data}
                options={options}
                width={30}
                height={15}

              />
            </div>
          );

      };

export default WeekBarGraph;
