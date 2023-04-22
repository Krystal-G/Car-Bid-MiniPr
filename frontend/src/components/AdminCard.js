import React from "react";
import { Box, Divider, Link } from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { purple } from "@mui/material/colors";

export default function AdminCard({ props }) {
  return (
    <Box sx={{ boxShadow: 10, height: "150px", borderRadius: "3%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "5px",
        }}
      >
        <div>
          {props.name === "Drivers" ? (
            <CarRentalIcon sx={{ fontSize: 70, color: purple[700] }} />
          ) : null}
          {props.name === "Employees" ? (
            <PeopleAltIcon sx={{ fontSize: 70, color: purple[700] }} />
          ) : null}
          {props.name === "Pending Requests" ? (
            <PendingActionsIcon sx={{ fontSize: 70, color: purple[700] }} />
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div>
            {props.name}{" "}
            {props.name === "Drivers" || props.name === "Employees"
              ? "Joined"
              : ""}
          </div>
          <div>
            <h2>31</h2>
          </div>
        </div>
      </div>
      <Divider variant="middle" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Link href="#" underline="hover">
          See all {props.name}
        </Link>
        <ArrowForwardIcon
          sx={{ paddingLeft: "5px", fontSize: 20, color: purple[700] }}
        ></ArrowForwardIcon>
      </div>
    </Box>
  );
}
