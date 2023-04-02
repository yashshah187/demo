import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { dataLine } from "../Data/Datas";
import { Typography } from "@mui/material";

const data = {
  labels: dataLine.map((d) => d.year),
  datasets: [
    {
      label: "",
      data: dataLine.map((d) => d.livesSaved),
      backgroundColor: "rgb(103, 230, 236,0.2)",
      borderColor: "rgb(103, 230, 236,0.7)",
      fill: true,
      pointBackgroundColor: "black",
      pointHoverRadius: 3,
      borderWidth: 5,
      hoverOffset: 4,
      tension: 0.5,
    },
  ],
};

const LineChart = () => {
  const [info, setInfo] = useState("10,900");

  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 78,
          fontFamily: "Calibri",
          fontWeight: "bold",
        }}
      >
        {info}
      </Typography>
      <div style={{ border: "1px solid black" }}>
        <Line
          data={data}
          width="140vw"
          borderWidth="1"
          borderColor="black"
          options={{
            type: "line",
            onClick: (evt, el, chart) => {
              setInfo(
                chart.data.datasets[el[0].datasetIndex].data[
                  el[0].index
                ].toLocaleString("en-US")
              );
            },

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
                  callback: function (value, index, ticks) {
                    return value / 1000 + "k";
                  },
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

export default LineChart;
