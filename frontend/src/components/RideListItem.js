import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RideInfoCard from "./UserInfoCards/RideInfoCard.js";

export default function RideListItem({ props }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.driverName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RideInfoCard />
      </AccordionDetails>
    </Accordion>
  );
}
