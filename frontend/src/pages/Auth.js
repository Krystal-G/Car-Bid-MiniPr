import React from "react";
import { useState } from "react";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
// import { Logo } from "src/components/logo";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";

// TODO: Change subtitle text

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
        width: "100%",
        height: "100vh",
        // overflow: "hidden",
      }}
    >
      <Grid container sx={{ flex: "1" }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            
          }}
        >
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Signup setIsLogin={setIsLogin} />
          )}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            display: {xs:"none",md:"none",lg:"flex"},
            flexDirection: "column",
            textAlign:"center",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:"50px",
            position: "relative",
            "& img": {
              maxWidth: {xs:"0",md:"100%"},
              maxHeight:{xs:"0",md:"100%"},
              height: "100%",
              objectFit: "cover",
            },
          }}
        >           
          <img src={require("../components/auth/auth1.jpeg")}/>
          
        </Grid>
      </Grid>
    </Box>
  );
};
export default Auth;