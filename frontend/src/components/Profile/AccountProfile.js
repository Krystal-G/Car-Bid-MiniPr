import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { MainState } from "../../context/MainContext";



const AccountProfile = () => {
  const CurrentLoggedInUser = JSON.parse(localStorage.getItem("userInfo")).userInf.user;

  const user = {
    avatar: "/assets/avatars/avatar-anika-visser.png",
    name: CurrentLoggedInUser.name,
    email: CurrentLoggedInUser.email,
  };
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80,
            }}
          />
          <Typography gutterBottom variant="h5">
            {user.name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.city} {user.country}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.email}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        {/* <Button fullWidth variant="text">
          Upload picture
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
