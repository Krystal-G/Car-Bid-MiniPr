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
const {createOrg} = MainState();
const onSubmitHandler = (e) =>
{
    e.preventDefault();
    const CurrentUser = JSON.parse(localStorage.getItem("userInfo"));
    const userId = CurrentUser.user.data.user._id;
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
                    onChange={(e) => setOrgName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Organization Description"
                    name="orgDesc"
                    type="string"
                    value={organizationDescription}
                    onChange={(e) => setOrgDesc(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Organization Address"
                    name="orgAdd"
                    type="string"
                    value={organizationAddress}
                    onChange={(e) => setOrgAdd(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Enter Reach Time"
                    name="orgTime"
                    type="time"
                    htmlFor="time-input"
                    value={orgTime}
                    onChange={(e) => setOrgTime(e.target.value)}
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
