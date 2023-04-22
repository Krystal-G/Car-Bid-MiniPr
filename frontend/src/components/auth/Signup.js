import React, { useState, useCallback } from "react";
import {MainState} from "../../context/MainContext";
import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Link,
} from "@mui/material";
const Signup = ({ setIsLogin }) => {
  const [method, setMethod] = useState("passenger");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAdhaar] = useState("");
  const [carModel, setCarModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [rc, setRc] = useState("");
  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);
  const {signupContextForDriver,signupContextForPassenger} = MainState();
  const handleSubmitOfPassenger = (e) => {
    e.preventDefault();
    signupContextForPassenger({
      name:name,
      email: email,
      password: password,
      phone: phone,
      aadhar: aadhar,
    });
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAdhaar("");
  };
  const handleSubmitOfDriver = (e) => {
    e.preventDefault();
    signupContextForDriver({
      name:name,
      email: email,
      password: password,
      aadhar:aadhar,
      phone: phone,
      rc: rc,
      licensePlate:licensePlate,
      carModel:carModel
    });
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAdhaar("");
    setRc("");
    setLicensePlate("");
    setCarModel("");
  };

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
              <Typography variant="h4">Signup</Typography>
              <Typography color="text.secondary" variant="body2">
                Alredy have an account? &nbsp;
                <Link
                  underline="hover"
                  variant="subtitle2"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </Link>
              </Typography>
            </Stack>
            <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="passenger" value="passenger" />
              <Tab label="driver" value="driver" />
            </Tabs>
            {method === "passenger" && (
              <form noValidate onSubmit={handleSubmitOfPassenger}>
                <Stack spacing={3}>
                <TextField
                    fullWidth
                    variant="filled"
                    label="Name"
                    name="name"
                    type="string"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <TextField
                    variant="filled"
                    label="Aadhar number"
                    name="aadhar"
                    type="string"
                    value={aadhar}
                    onChange={(e) => setAdhaar(e.target.value)}
                  />

                  <TextField
                    variant="filled"
                    label="phone number"
                    name="phone"
                    type="string"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
            {method === "driver" && (
              <form noValidate onSubmit={handleSubmitOfDriver}>
                <Stack spacing={3}>
                <TextField
                    fullWidth
                    variant="filled"
                    label="Name"
                    name="name"
                    type="string"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    
                    <TextField
                    variant="filled"
                    label="Aadhar number"
                    name="aadhar"
                    type="string"
                    value={aadhar}
                    onChange={(e) => setAdhaar(e.target.value)}
                  />
                    <TextField
                      variant="filled"
                      label="phone number"
                      name="phone"
                      type="string"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      sx={{ width: "48%" }}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="License Plate"
                    name="licensePlate"
                    type="string"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Rc number"
                    name="rc"
                    type="string"
                    value={rc}
                    onChange={(e) => setRc(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Car model"
                    name="carModel"
                    type="string"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
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

export default Signup;
