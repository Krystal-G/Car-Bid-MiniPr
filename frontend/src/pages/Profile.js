import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import AccountProfile from "../components/Profile/AccountProfile";
import AccountProfileDetails from "../components/Profile/AccountProfileDetails";
import ChangePassword from "../components/Profile/ChangePassword";
import NavBar from "../components/Navbar/Navbar";
const Profile = () => {
  const [isProfile, setIsProfile] = React.useState(true);
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Account</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <AccountProfile />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  {isProfile ? (
                    <AccountProfileDetails
                      isProfile={isProfile}
                      setIsProfile={setIsProfile}
                    />
                  ) : (
                    <ChangePassword
                      isProfile={isProfile}
                      setIsProfile={setIsProfile}
                    />
                  )}
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Profile;