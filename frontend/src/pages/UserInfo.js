import React from "react";
import { Grid, Container } from "@mui/material";
import OrganisationInfo from "../components/UserInfoCards/OrganisationInfo";
import RideShareInfo from "../components/UserInfoCards/RideShareInfo";
import RideInfo from "../components/UserInfoCards/RideInfo";
import Profile from "../components/UserInfoCards/Profile";
const UserInfo = () => {
  return (
    <Container maxWidth={false} sx={{backgroundColor:"backgroundInfo.main", height: "100vh"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Container sx={{mt:4}}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <OrganisationInfo />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <RideShareInfo />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <RideInfo />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserInfo;
