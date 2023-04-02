import React from "react";
import dashboard from "../../Images/dashboard.png";
import LineChart from "./Charts/LineChart";
import Bar1Chart from "./Charts/Bar1Chart";
import { Grid, Typography } from "@mui/material";
import LineChart2 from "./Charts/LineChart2";
import StackBar from "./Charts/StackBar";
import Bar2Chart from "./Charts/Bar2Chart";

const Dashboard = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${dashboard})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <Grid container columnSpacing={{ md: 1, lg: 1 }}>
          <Grid
            items
            md={4}
            lg={4}
            sx={{ mt: { md: 35, lg: 37 }, pl: { md: 12, lg: 10 } }}
          >
            <LineChart />
          </Grid>
          <Grid items md={4} lg={4} sx={{ mt: 37, pl: 20, pr: 1 }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 35,
                fontWeight: "bold",
                marginBottom: 4,
                fontFamily: "Calibri",
              }}
            >
              45 days
            </Typography>
            <Bar1Chart />
            <LineChart2 />
          </Grid>
          <Grid items md={4} lg={4} sx={{ mt: 36, pl: 10, pr: 1 }}>
            <StackBar />
            <Bar2Chart />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
