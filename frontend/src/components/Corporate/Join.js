import React, { useState, useCallback } from "react";
import ListOfOrgs from "./ListOfOrgs";
import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Autocomplete
} from "@mui/material";
import { MainState } from "../../context/MainContext";
const Join = () => {
  const [orgId, setOrgId] = useState("");
  const [location, setLocation] = useState("");

  const [orgIdError, setOrgIdError] = useState("");
  const [locationError, setLocationError] = useState("");

  const { joinUserToOrg, joinDriverToOrg } = MainState();
  const CurrentUser = JSON.parse(localStorage.getItem("userInfo"));

  const handleOrgIdChange = (e) => {
    setOrgId(e.target.value);
    if (orgId) {
      setOrgIdError("");
    }
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    if (location) {
      setLocationError("");
    }
  };
  const handleSubmitOfEmployee = (e) => {
    e.preventDefault();
    // console.log(CurrentUser);
    const userId = CurrentUser.userInf.user._id;
    setOrgIdError("");
    setLocationError("");
    let isValid = true;
    if (!orgId) {
      setOrgIdError("Organization ID is required");
      isValid = false;
    }
    if (!location) {
      setLocationError("Location is required");
      isValid = false;
    }

    if (isValid) {
      joinUserToOrg({
        userId: userId,
        orgId: orgId,
        location: location
      })
      setOrgId("");
      setLocation("");
    }

  };
  const locationSet = [
    { label: "Indian Institute of Information Technology Lucknow" },
    { label: "Lohia Park" },
    { label: "Amul Dairy" },
    { label: "Fun Republic Mall" },
    { label: "Phoenix United Mall" },
    { label: "Hazratganj" },
    { label: "Ambedkar Park" },
    { label: "Janeshwar Mishra Park" },
    { label: "Gomti Nagar" },
    { label: "Indira Gandhi Pratishthan" },
    { label: "Chaudhary Charan Singh International Airport" }
  ];
  const [method, setMethod] = useState("driver");
  const handleLocationMethodChange = useCallback((event, value) => {
    //remove label from value and setMethod to value
    setMethod(value?.label);
  }, []);
  const handleMethodChange = useCallback((event, value) => {
    //remove label from value and setMethod to value
    setMethod(value);
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Corporate Accounts</Typography>
            </Stack>
            {/* <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="driver" value="driver" />
              <Tab label="employee" value="employee" />
            </Tabs> */}
            {CurrentUser?.userInf.role === "driver" && (<ListOfOrgs />)}
            {/* {method === "driver" && (
              <ListOfOrgs/>
            )} */}
            {CurrentUser?.userInf.role === "passenger" && (
              <form noValidate onSubmit={handleSubmitOfEmployee}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="organization ID"
                    name="orgID"
                    type="string"
                    value={orgId}
                    onChange={(e) => handleOrgIdChange(e)}
                    error={!!orgIdError}
                    helperText={orgIdError}
                  />
                  <Autocomplete
                    onChange={handleLocationMethodChange}
                    disablePortal
                    id="combo-box-demo"
                    options={locationSet}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField variant="filled" {...params} label="Location" />}
                  />

                </Stack>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Join;
