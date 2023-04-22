import React, { useCallback, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Link
} from "@mui/material";
import { CurrentLoggedInUser } from "../../context/MainContext";


const AccountProfileDetails = ({ isProfile, setIsProfile }) => {
  const [values, setValues] = useState({
    firstName: CurrentLoggedInUser?.name,
    lastName: "Visser",
    email: CurrentLoggedInUser?.email,
    phone: CurrentLoggedInUser?.phoneNo,
    state: "Uttar Pradesh",
    country: "India",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="filled"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="filled"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant="filled"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="filled"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="filled"
                />
              </Grid>
              
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end", p:2}}>
          <Link href="/">
          <Button sx={{
            textDecoration:"none",
            marginRight:"7px"
          }} variant="contained">Home Page</Button>
          </Link>
          
          <Button variant="contained">Save</Button>
          <Button onClick={() => setIsProfile(false)} variant="contained">
            {isProfile ? "change password" : "Back"}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
