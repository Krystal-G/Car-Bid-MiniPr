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
} from "@mui/material";
const ChangePassword = ({ setIsProfile }) => {
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
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
        <CardHeader
          title="Change Password"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={12} sm={12} lg={12}>
                <TextField
                  fullWidth
                  helperText="Enter old password"
                  label="Old Password"
                  name="oldPassword"
                  onChange={handleChange}
                  required
                  value={values.oldPassword}
                  variant="filled"
                />
              </Grid>
              <Grid xs={12} md={12} sm={12} lg={12}>
                <TextField
                  fullWidth
                  helperText="Enter New Password"
                  label="new password"
                  name="newPassword"
                  onChange={handleChange}
                  required
                  value={values.newPassword}
                  variant="filled"
                />
              </Grid>
              <Grid xs={12} md={12} sm={12} lg={12}>
                <TextField
                  fullWidth
                  helperText="confirm New Password"
                  label="confirm New Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                  value={values.confirmPassword}
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
          <Button variant="contained" onClick={() => setIsProfile(true)}>
            back
          </Button>
          <Button variant="contained">Change Password</Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default ChangePassword;
