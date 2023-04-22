import React from "react";
import {
  CardHeader,
  CardContent,
  Divider,
  Stepper,
  Step,
  StepContent,
  StepLabel,
  Typography,
  Avatar,
} from "@mui/material";
import ReCard from "./ReCard";
const steps = [
  {
    label: "Manas Agarwal",
    description: "from Gomti Nagar at 10:00 AM",
  },
  {
    label: "Rahul",
    description: "from IIIT Lucknow at 11:00 AM",
  },

  {
    label: "Jai",
    description: "from pallasio at 11:15 AM",
  },
  {
    label: "Rahul",
    description: "from IIIT Lucknow at 11:30 AM",
  },
];

const RideInfo = () => {
  return (
    <ReCard>
      <CardHeader
        sx={{ textAlign: "left" }}
        title="Other Riders"
      />
      <Divider variant="middle" />
      <CardContent>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step active={true} key={step.label}>
              <StepLabel
                icon={
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiB9yl1za6EvJltqYre7MABVe3uMPWGhtbQ&usqp=CAU"
                    sx={{ borderRadius: "20%", height: "30px", width: "30px" }}
                  />
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography variant="body2" align={"left"}>
                  {step.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </CardContent>
    </ReCard>
  );
};

export default RideInfo;

