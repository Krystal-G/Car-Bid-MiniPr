import React from "react";
import AdminCard from "../components/AdminCard.js";
import { Box, Grid } from "@mui/material";
import RideListItem from "../components/RideListItem.js";
export default function CorporateAdmin() {
  return (
    <React.Fragment>
      <Grid item sx={{ padding: "20px" }}>
        <h1>Overview</h1>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={3}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={8} md={3} sm={8}>
          <AdminCard props={{ name: "Drivers" }} />
        </Grid>
        <Grid item xs={8} md={3} sm={8}>
          <AdminCard props={{ name: "Employees" }} />
        </Grid>
        <Grid item xs={8} md={3} sm={8}>
          <AdminCard props={{ name: "Pending Requests" }} />
        </Grid>
      </Grid>
      <Box>
        <Grid container direction="column" spacing={2} alignItems="flex-start">
          <Grid item xs={8} md={8} sm={8}>
            <RideListItem props={{ driverName: "Alex" }} />
          </Grid>
          <Grid item xs={8} md={8} sm={8}>
            <RideListItem props={{ driverName: "Abhishek" }} />
          </Grid>
          <Grid item xs={8} md={8} sm={8}>
            <RideListItem props={{ driverName: "Ayush" }} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
