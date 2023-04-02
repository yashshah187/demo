import React from "react";
import { dataLine2 } from "../Data/Datas";
import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

const data = {
  labels: dataLine2.map((d) => d.year),
  datasets: [
    {
      label: "",
      data: dataLine2.map((d) => d.avgTime),
      backgroundColor: "rgb(103, 230, 236,0.2)",
      borderColor: "rgb(103, 230, 236,0.7)",
      fill: true,
      pointBackgroundColor: "black",
      pointHoverRadius: 3,
      borderWidth: 4,
    },
  ],
};

const LineChart2 = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: "'PT Sans Narrow', sans-serif",
          color: "rgb(54, 69, 79)",
          marginTop: 3,
          marginBottom: 2,
        }}
      >
        Avg Time to Adopt over time
      </Typography>
      <div style={{ border: "1px solid black" }}>
        <Line
          data={data}
          width="220vw"
          options={{
            type: "line",
            elements: {
              point: {
                radius: 0,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            interaction: {
              mode: "nearest",
              axis: "x",
              intersect: false,
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "rgb(128,128,128,0.05)",
                },
                ticks: {
                  stepSize: 20,
                  color: "rgb(54, 69, 79)",
                  font: {
                    size: 13,
                    weight: "bold",
                    family: "Calibri",
                  },
                },
              },
              x: {
                offset: true,
                grid: {
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
    </div>
  );
};

export default LineChart2;
