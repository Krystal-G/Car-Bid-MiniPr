import React, { useState, useEffect } from "react";
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
  const { userRideInfo, loading } = MainState();
  const [steps, setSteps] = useState([]);
  // const f= ()=>{
  //   console.log(userRideInfo);
  // }
  // f();
  const assignSteps = () => {
    if (userRideInfo !== null) {
      const tempArr = [];
      for (let i = 0; i < userRideInfo.users.length; i++) {
        const temp =
        {
          label: userRideInfo.users[i].name,
          description: `from ${userRideInfo.users[i].pickupLocation} at ${userRideInfo.users[i].pickupTime}`,
        }
          ;
        console.log(temp.labe);
        console.log(temp.description);
        tempArr.push(temp);
      }
      setSteps(tempArr);
    }
  }
  useEffect(() => {
    assignSteps();
  }, [userRideInfo]);
  if (loading) {
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
  if (steps.length === 0) {
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
