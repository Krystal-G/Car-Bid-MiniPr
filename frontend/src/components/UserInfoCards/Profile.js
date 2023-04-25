import React from "react";
import {
  Avatar,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { MainState } from "../../context/MainContext";
const Profile = () => {
  const CurrentLoggedInUser = JSON.parse(localStorage.getItem("userInfo")).userInf;
  
  return (
    <Container
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(135deg, #8330C2 0%, #efc9d0 100%)",
        marginTop: 0,
        marginBottom: "40px",
        padding:0,
        borderRadius: "0 0 20px 20px",
        width: "100%",
        height: "80px",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          backgroundColor: "white",
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          // background: "linear-gradient(315deg, #fff5f7 0%, #f8f1fe 100%)",
          boxShadow: 1,
          borderRadius: "20px 20px 20px",
          width: "94%",
          height: "100px",
          position: "absolute",
          top: "30%",
          pt: 2,
          opacity: 0.97,
        }}
      >
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiB9yl1za6EvJltqYre7MABVe3uMPWGhtbQ&usqp=CAU"
          sx={{ borderRadius: "10%", height: "75px", width: "75px" }}
          aria-label="recipe"
        />
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h6"
            sx={{ display: "inline-block", marginLeft: "10px" }}
          >
            {CurrentLoggedInUser.user.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{ display: "inline-block", marginLeft: "10px" }}
          >
            {CurrentLoggedInUser.role === "driver" ? "Driver" : "Employee"}
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Profile;