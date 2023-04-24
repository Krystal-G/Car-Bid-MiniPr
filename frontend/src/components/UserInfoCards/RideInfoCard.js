import React, { useState,useEffect } from "react";
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
import { MainState } from "../../context/MainContext";


const RideInfo = () => {
  const {userRideInfo,loading} = MainState();
  const [steps,setSteps] = useState([]);
  useEffect(() => {
    if(userRideInfo !== null){
      const temp = [
        {
          label: userRideInfo.users[0].name,
          description: `from ${userRideInfo.users[0].pickupLocation} at ${userRideInfo.users[0].pickupTime}`,
        },
        {
          label: userRideInfo.users[1].name,
          description: `from ${userRideInfo.users[1].pickupLocation} at ${userRideInfo.users[1].pickupTime}`,
        },
        {
          label: userRideInfo.users[2].name,
          description: `from ${userRideInfo.users[2].pickupLocation} at ${userRideInfo.users[2].pickupTime}`,
        },
        {
          label: userRideInfo.users[3].name,
          description: `from ${userRideInfo.users[3].pickupLocation} at ${userRideInfo.users[3].pickupTime}`,
        },
      ];
      setSteps(temp);
    }
  },[userRideInfo]);
  if(loading){
    return (
      <ReCard>
        <CardHeader sx={{ textAlign: "left" }} title="Other Riders" />
        <Divider variant="middle" />
        <CardContent>
          loading
        </CardContent>
      </ReCard>
    )
  }
  if(userRideInfo === null){
    return (
      <ReCard>
        <CardHeader sx={{ textAlign: "left" }} title="Other Riders" />
        <Divider variant="middle" />
        <CardContent>
          No other riders
        </CardContent>
      </ReCard>
    )
  }
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

