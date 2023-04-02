import React from "react";
import { dataBar2 } from "../Data/Datas";
import { Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";

const data = {
  labels: dataBar2.map((d) => d.breed),
  datasets: [
    {
      label: "",
      data: dataBar2.map((d) => d.total),
      backgroundColor: "rgb(103, 230, 236,0.7)",
      fill: true,
      hoverBorderWidth: 1,
      hoverBorderColor: "black",
      borderSkipped: false,
    },
  ],
};

const Bar2Chart = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: "'PT Sans Narrow', sans-serif",
          marginTop: 6,
          color: "rgb(54, 69, 79)",
        }}
      >
        Avg Time to Adopt over time
      </Typography>
      <Bar
        data={data}
        width="240vw"
        options={{
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                stepSize: 1300,
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

export default Bar2Chart;
