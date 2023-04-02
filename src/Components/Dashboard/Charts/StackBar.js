import React from "react";
import { Bar } from "react-chartjs-2";
import { dataStackBar } from "../Data/Datas";
import { Typography } from "@mui/material";

const data = {
  labels: dataStackBar.map((d) => d.text),
  datasets: [
    {
      label: "Does/Are",
      data: dataStackBar.map((d) => d.avgTime1),
      backgroundColor: "rgb(103, 230, 236,0.7)",
      fill: true,
      hoverBorderWidth: 1,
      hoverBorderColor: "black",
      borderSkipped: false,
    },
    {
      label: "Does Not/Are Not",
      data: dataStackBar.map((d) => d.avgTime2),
      backgroundColor: "rgb(105,105,105)",
      fill: true,
      hoverBorderWidth: 1,
      hoverBorderColor: "black",
      borderSkipped: false,
    },
    {
      label: "Not Sure",
      data: dataStackBar.map((d) => d.avgTime3),
      backgroundColor: "rgb(208,208,208)",
      fill: true,
      hoverBorderWidth: 1,
      hoverBorderColor: "black",
      borderSkipped: false,
    },
  ],
};

const StackBar = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: "'PT Sans Narrow', sans-serif",
          marginTop: 4,
          color: "rgb(54, 69, 79)",
        }}
      >
        Proportions of Dogs that ....
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
              position: "bottom",
              labels: {
                color: "rgb(54, 69, 79)",
                boxWidth: 15,
                font: {
                  size: 13,
                  weight: "bold",
                  family: "Calibri",
                },
              },
            },
            tooltip: {
              titleColor: "black",
              bodyColor: "black",
              backgroundColor: "white",
              borderColor: "rgb(54, 69, 79)",
              borderWidth: 1,
              displayColors: false,
              callbacks: {
                label: function (context) {
                  return (
                    "% of Total Adoptions: " + context.formattedValue + "%"
                  );
                },
                title: function (context) {
                  console.log(context);
                  return context[0].label + "?: " + context[0].dataset.label;
                },
              },
            },
          },
          interaction: {
            mode: "nearest",
            intersect: false,
          },
          scales: {
            x: {
              stacked: true,

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
              stacked: true,
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

export default StackBar;
