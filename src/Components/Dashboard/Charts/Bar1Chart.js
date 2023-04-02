import React from "react";
import { Bar } from "react-chartjs-2";
import { dataBar1 } from "../Data/Datas";
import { Typography } from "@mui/material";

const data = {
  labels: dataBar1.map((d) => d.age),
  datasets: [
    {
      label: "Avg Time to adopt",
      data: dataBar1.map((d) => d.avgTime),
      backgroundColor: "rgb(103, 230, 236,0.7)",
      fill: true,
      hoverBorderWidth: 1,
      hoverBorderColor: "black",
      borderSkipped: false,
    },
  ],
};
const Bar1Chart = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: "'PT Sans Narrow', sans-serif",
          color: "rgb(54, 69, 79)",
        }}
      >
        Avg Time to Adopt by Age Bucket
      </Typography>
      <Bar
        data={data}
        options={{
          indexAxis: "y",
          type: "bar",
          categoryPercentage: 0.42,
          barPercentage: 1.0,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
            title: {
              display: true,
              text: "Note: Starts at Date of Transport",
              position: "bottom",
              color: "rgb(54, 69, 79)",
              font: {
                size: 13,
                weight: "bold",
                family: "Calibri",
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                stepSize: 1,
                display: false,
              },
              border: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                color: "rgb(54, 69, 79)",
                font: {
                  size: 13,
                  weight: "bold",
                  family: "Calibri",
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Bar1Chart;
