import React, { useState, useCallback } from "react";

import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { MainState } from "../../context/MainContext";
const CreateOrg = () => {
const [organizationName,setOrgName] = useState("");
const [organizationDescription,setOrgDesc] = useState("");
const [organizationAddress,setOrgAdd] = useState("");
const [orgTime,setOrgTime] = useState("");

const [organizationNameError,setOrgNameError] = useState("");
const [organizationDescriptionError,setOrgDescError] = useState("");
const [organizationAddressError,setOrgAddError] = useState("");
const [orgTimeError,setOrgTimeError] = useState("");


const handleOrganizationNameChange = (e) =>
{
  setOrgName(e.target.value);
  if(organizationName)
  {
    setOrgNameError("");
  }
};

const handleOrganizationDescChange = (e) =>
{
  setOrgDesc(e.target.value);
  if(organizationDescription)
  {
    setOrgDescError("");
  }
};

const handleOrganizationAddressChange = (e) =>
{
  setOrgAdd(e.target.value);
  if(organizationAddress)
  {
    setOrgAddError("");
  }
};

const handleOrganizationTimeChange = (e) =>
{
  setOrgTime(e.target.value);
  if(organizationAddress)
  {
    setOrgTimeError("");
  }
};

const {createOrg} = MainState();
const onSubmitHandler = (e) =>
{
    e.preventDefault();
    const CurrentUser = JSON.parse(localStorage.getItem("userInfo"));
    const userId = CurrentUser.userInf.user._id;
    
    let isValid = false;
    if(!organizationName)
    {
      setOrgNameError("Organization Name is required");
      isValid = true;
    }
    if(!organizationDescription)
    {
      setOrgDescError("Description is required");
      isValid = true;
    }
    if(!organizationAddress)
    {
      setOrgAddError("Address is required");
      isValid = true;
    }
    if(!orgTime)
    {
      setOrgTimeError("Organization Time is required");
      isValid = true;
    }
    if(!isValid)
    {
      createOrg({
        userId:userId,
        organizationName:organizationName,
        organizationDescription:organizationAddress,
        organizationAddress:organizationAddress,
        orgTime:orgTime
    })
    // console.log(orgTime);
    setOrgName("");
    setOrgDesc("");
    setOrgAdd("");
    setOrgTime("");
    }
    
}
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
            
            
              <form noValidate onSubmit={onSubmitHandler}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Organization Name"
                    name="orgName"
                    type="string"
                    value={organizationName}
                    onChange={(e) => handleOrganizationNameChange(e)}
                    error={!!organizationNameError}
                    helperText={organizationNameError}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Organization Description"
                    name="orgDesc"
                    type="string"
                    value={organizationDescription}
                    onChange={(e) => handleOrganizationDescChange(e)}
                    error={!!organizationDescriptionError}
                    helperText={organizationDescriptionError}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Organization Address"
                    name="orgAdd"
                    type="string"
                    value={organizationAddress}
                    onChange={(e) => handleOrganizationAddressChange(e)}
                    error={!!organizationAddressError}
                    helperText={organizationAddressError}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Enter Reach Time"
                    name="orgTime"
                    type="time"
                    htmlFor="time-input"
                    value={orgTime}
                    onChange={(e) => handleOrganizationTimeChange(e)}
                    error={!!orgTimeError}
                    helperText={orgTimeError}
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
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CreateOrg;
