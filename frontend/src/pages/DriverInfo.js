import React, {useEffect} from "react";
import { Grid, Container } from "@mui/material";
import OrganisationInfoListDriver from "../components/UserInfoCards/OrganisationInfoListDriver";
import RideListDriver from "../components/UserInfoCards/RideListDriver";
import RideInfo from "../components/UserInfoCards/RideInfo";
import Profile from "../components/UserInfoCards/Profile";
import { MainState } from "../context/MainContext";
import Loading from "../components/Loading";
const DriverInfo = () => {
  const {getAllOrg,getRidesByDriverId,loading} = MainState();
  useEffect(() =>
  {
    getAllOrg();
    getRidesByDriverId();
  },[]);
  if(loading){
    return <Loading />
  }
  return (
    <Container maxWidth={false} sx={{backgroundColor:"backgroundInfo.main", height: "100vh"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Container sx={{mt:4}}>
            <Grid container spacing={12} justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <OrganisationInfoListDriver />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <RideListDriver />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DriverInfo;
