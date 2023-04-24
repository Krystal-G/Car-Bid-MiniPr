import React, { useEffect } from "react";
import {CardHeader, CardContent, Divider} from "@mui/material";
import Text from "./Text";
import ReCard from "./ReCard";
import { MainState } from "../../context/MainContext";

const RideShareInfo = () => {
  const {loading,userRideInfo,orgDetails} = MainState();
  if(loading)
  {
    return (
      <ReCard>
      <CardHeader sx={{ textAlign: "left" }} title="Ride Info" />
      <Divider variant="middle" />
      <CardContent>
      loading
      </CardContent>
    </ReCard>
    );
  }
  if(userRideInfo===null){
    return (
      <ReCard>
      <CardHeader sx={{ textAlign: "left" }} title="Ride Info" />
      <Divider variant="middle" />
      <CardContent>
      No Ride
      </CardContent>
    </ReCard>
    );
  }
  // const userRideInfo driverDetails.= {
  //   Name: allRides.name,
  //   DriverContact: allRides.DriverContact
  // }
  return (
    <ReCard>
      <CardHeader sx={{ textAlign: "left" }} title="Ride Info" />
      <Divider variant="middle" />
      <CardContent>
          <Text first="Driver Name" second={userRideInfo.driverDetails.name} />
          <Text first="Driver Contact" second={userRideInfo.driverDetails.phoneNo} />
          <Text first="Car No" second={userRideInfo.driverDetails.licensePlate} />
          <Text first="Car Model" second={userRideInfo.driverDetails.carModel} />
          <Text first="Pickup Location" second={userRideInfo.pickupLocation} />
          <Text first="Drop Location" second={orgDetails.name} />
          <Text first="Pickup Time" second={userRideInfo.pickupTime} />
          <Text first="Drop Time" second={orgDetails.orgTime} />
      </CardContent>
    </ReCard>
  );
};

export default RideShareInfo;
