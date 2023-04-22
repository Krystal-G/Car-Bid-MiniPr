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
        height: "100%",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
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
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                height: 32,
                width: 32,
              }}
            >
              {/* <Logo /> */}
            </Box>
          </Box>
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
            alignItems: "center",
            background:
              "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
                mb: 1,
              }}
              variant="h1"
            >
              Welcome to{" "}
              <Box component="a" sx={{ color: "#15B79E" }} target="_blank">
                Devias Kit
              </Box>
            </Typography>
            <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
              A professional kit that comes with ready-to-use MUI components.
            </Typography>
            <img alt="" src="/assets/auth-illustration.svg" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Auth;
