import React, {useEffect} from "react";
import { Grid, Container,Box } from "@mui/material";
import OrganisationInfo from "../components/UserInfoCards/OrganisationInfo";
import RideShareInfo from "../components/UserInfoCards/RideShareInfo";
import RideInfo from "../components/UserInfoCards/RideInfo";
import Profile from "../components/UserInfoCards/Profile";
import { MainState } from "../context/MainContext";
import Loading from "../components/Loading";
import Typography from "@mui/material/Typography"
import NavBar from "../components/Navbar/Navbar";
const UserInfo = () => {
  const {getOrgById,getRideById,loading} = MainState();
  const CurrentUser = JSON.parse(localStorage.getItem("userInfo")).userInf;
  useEffect(() =>
  {
    if(!CurrentUser?.user?.organization){
      return;
    }
    getOrgById();
    getRideById();
  },[]);
  if(loading){
    return <Loading />
  }
  if(!CurrentUser.user.organization){
    return (
      <>
        <NavBar/>
        <Container maxWidth={false} sx={{backgroundColor:"backgroundInfo.main", height: "100vh"}}>
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Box sx={{marginTop: "70px"}}>
              <Profile />
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Container sx={{mt:4}}>
                <Typography variant="h4" sx={{color:"text.primary", fontWeight:"bold", textAlign:"center"}}>
                  You are not a member of any organization
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </>
    );
    
    
  }
  return (
    <>
    <NavBar/>
    <Container maxWidth={false} sx={{backgroundColor:"backgroundInfo.main", height: "100vh"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box sx={{display:"flex", flexDirection:"column"}}>
            <Box sx={{marginTop: "70px"}}>
              <Profile />
            </Box>
          </Box>
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
    </>
  );
};

export default UserInfo;