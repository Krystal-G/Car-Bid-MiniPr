import React, { useEffect } from "react";
import {CardHeader, CardContent, Divider} from "@mui/material";
import Text from "./Text";
import ReCard from "./ReCard";
import { MainState } from "../../context/MainContext";

const RideShareInfo = () => {
  const {getRidesById,loading,allRides} = MainState();
  useEffect(() =>
  {
    getRidesById();
  },[])
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
  const rideObj = {
    Name: allRides.name,
    DriverContact: allRides.DriverContact
  }
  return (
    <ReCard>
      <CardHeader sx={{ textAlign: "left" }} title="Ride Info" />
      <Divider variant="middle" />
      <CardContent>
          {/* <Text first="Driver Name" second={rideObj.DriverName} />
          <Text first="Driver Contact" second={rideObj.DriverContact} />
          <Text first="Car No" second={rideObj.CarNo} />
          <Text first="Car Model" second={rideObj.CarModel} />
          <Text first="Pickup Location" second={rideObj.PickupLocation} />
          <Text first="Drop Location" second={rideObj.DropLocation} />
          <Text first="Pickup Time" second={rideObj.PickupTime} />
          <Text first="Drop Time" second={rideObj.DropTime} /> */}
      </CardContent>
    </ReCard>
  );
};

export default RideShareInfo;
