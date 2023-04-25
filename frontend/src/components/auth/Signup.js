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
  // const [formValuesOfDriver, setFormValuesOfDriver] = useState({
  //   name:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a name'
  //   },
  //   email:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter an email'
  //   },
  //   password:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter password'
  //   },
  //   phone:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a valid phone number'
  //   },
  //   aadhar:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a valid aadhar number'
  //   },
  //   carModel:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter car Model'
  //   },
  //   licensePlate:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a valid license plate number'
  //   },
  //   rc:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a valid rc number'
  //   },
  // })
  // const [formValuesOfPassenger, setFormValuesOfPassenger] = useState({
  //   name:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a name'
  //   },
  //   email:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter an email'
  //   },
  //   password:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter password'
  //   },
  //   phone:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a valid phone number'
  //   },
  //   aadhar:{
  //     value:'',
  //     error:false,
  //     errorMessage:'You must enter a valid aadhar number'
  //   }
  // })
  const [method, setMethod] = useState("Passenger");
  const [nameOfPassenger, setNameOfPassenger] = useState("");
  const [emailOfPassenger, setEmailOfPassenger] = useState("");
  const [passwordOfPassenger, setPasswordOfPassenger] = useState("");
  const [phoneOfPassenger, setPhoneOfPassenger] = useState("");
  const [aadharOfPassenger, setAdhaarOfPassenger] = useState("");

  const [nameOfDriver, setNameOfDriver] = useState("");
  const [emailOfDriver, setEmailOfDriver] = useState("");
  const [passwordOfDriver, setPasswordOfDriver] = useState("");
  const [phoneOfDriver, setPhoneOfDriver] = useState("");
  const [aadharOfDriver, setAdhaarOfDriver] = useState("");

  const [carModel, setCarModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [rc, setRc] = useState("");


  const [nameErrorForPassenger, setNameErrorForPassenger] = useState("");
  const [emailErrorForPassenger, setEmailErrorForPassenger] = useState("");
  const [passwordErrorForPassenger, setPasswordErrorForPassenger] = useState("");
  const [aadharErrorForPassenger, setAdhaarErrorForPassenger] = useState("");
  const [phoneErrorForPassenger, setPhoneErrorForPassenger] = useState("");

  const [nameErrorForDriver, setNameErrorForDriver] = useState("");
  const [emailErrorForDriver, setEmailErrorForDriver] = useState("");
  const [passwordErrorForDriver, setPasswordErrorForDriver] = useState("");
  const [aadharErrorForDriver, setAdhaarErrorForDriver] = useState("");
  const [phoneErrorForDriver, setPhoneErrorForDriver] = useState("");

  const [licensePlateError, setLicensePlateError] = useState("");
  const [rcError, setRcError] = useState("");
  const [carModelError, setCarModelError] = useState("");
  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);
  const {signupContextForDriver,signupContextForPassenger} = MainState();
  const handleNameChangeForPassenger = (e) => {
    setNameOfPassenger(e.target.value);
    if (nameErrorForPassenger) {
      setNameErrorForPassenger("");
    }
  };
  const handleNameChangeForDriver = (e) => {
    setNameOfDriver(e.target.value);
    if (nameErrorForDriver) {
      setNameErrorForDriver("");
    }
  };
  const handlePasswordChangeForPassenger = (e) => {
    setPasswordOfPassenger(e.target.value);
    if (passwordErrorForPassenger) {
      setPasswordErrorForPassenger("");
    }
  };
  const handlePasswordChangeForDriver = (e) => {
    setPasswordOfDriver(e.target.value);
    if (passwordErrorForDriver) {
      setPasswordErrorForDriver("");
    }
  };
  const handleEmailChangeForPassenger = (e) => {
    setEmailOfPassenger(e.target.value);
    if (emailErrorForPassenger) {
      setEmailErrorForPassenger("");
    }
  };
  const handleEmailChangeForDriver = (e) => {
    setEmailOfDriver(e.target.value);
    if (emailErrorForDriver) {
      setEmailErrorForDriver("");
    }
  };
  const handlePhoneChangeForPassenger = (e) => {
    setPhoneOfPassenger(e.target.value);
    if (phoneErrorForPassenger) {
      setPhoneErrorForPassenger("");
    }
  };
  const handlePhoneChangeForDriver = (e) => {
    setPhoneOfDriver(e.target.value);
    if (phoneErrorForDriver) {
      setPhoneErrorForDriver("");
    }
  };
  const handleAadharChangeForPassenger = (e) => {
    setAdhaarOfPassenger(e.target.value);
    if (aadharErrorForPassenger) {
      setAdhaarErrorForPassenger("");
    }
  };
  const handleAadharChangeForDriver = (e) => {
    setAdhaarOfDriver(e.target.value);
    if (aadharErrorForDriver) {
      setAdhaarErrorForDriver("");
    }
  };
  const handleLicensePLateChange = (e) => {
    setLicensePlate(e.target.value);
    if (licensePlateError) {
      setLicensePlateError("");
    }
  };
  const handleCarModelChange = (e) => {
    setCarModel(e.target.value);
    if (carModelError) {
      setCarModelError("");
    }
  };
  const handleRcChange = (e) => {
    setRc(e.target.value);
    if (rcError) {
      setRcError("");
    }
  };
  const handleSubmitOfPassenger = (e) => {
    e.preventDefault();
    setNameErrorForPassenger("");
    setEmailErrorForPassenger("");
    setPasswordErrorForPassenger("");
    setAdhaarErrorForPassenger("");
    setPhoneErrorForPassenger("");
    let isValid = true;

    if (!nameOfPassenger) {
      setNameErrorForPassenger("Name is required");
      isValid = false;
    }

    if (!emailOfPassenger) {
      setEmailErrorForPassenger("Email is required");
      isValid = false;
    }

    if (!passwordOfPassenger) {
      setPasswordErrorForPassenger("Password is required");
      isValid = false;
    }

    if (aadharOfPassenger.length !== 12) {
      setAdhaarErrorForPassenger("Aadhar number should be 12 digits");
      isValid = false;
    }

    if (phoneOfPassenger.length !== 10) {
      setPhoneErrorForPassenger("Phone number should be 10 digits");
      isValid = false;
    }
    if(isValid)
    {
      signupContextForPassenger({
        name:nameOfPassenger,
        email: emailOfPassenger,
        password: passwordOfPassenger,
        phone: phoneOfPassenger,
        aadhar: aadharOfPassenger,
      });
      setNameOfPassenger("");
      setEmailOfPassenger("");
      setPasswordOfPassenger("");
      setPhoneOfPassenger("");
      setAdhaarOfPassenger("");
    }
      
  };
  const handleSubmitOfDriver = (e) => {
    e.preventDefault();
    setNameErrorForDriver("");
    setEmailErrorForDriver("");
    setPasswordErrorForDriver("");
    setAdhaarErrorForDriver("");
    setPhoneErrorForDriver("");
    setLicensePlateError("");
    setRcError("");
    setCarModelError("");

    // Validate input values
    let isValid = true;

    if (!nameOfDriver) {
      setNameErrorForDriver("Name is required");
      isValid = false;
    }

    if (!emailOfDriver) {
      setEmailErrorForDriver("Email is required");
      isValid = false;
    }

    if (!passwordOfDriver) {
      setPasswordErrorForDriver("Password is required");
      isValid = false;
    }

    if (aadharOfDriver.length !== 12) {
      setAdhaarErrorForDriver("Aadhar number should be 12 digits");
      isValid = false;
    }

    if (phoneOfDriver.length !== 10) {
      setPhoneErrorForDriver("Phone number should be 10 digits");
      isValid = false;
    }

    if (!licensePlate) {
      setLicensePlateError("License Plate is required");
      isValid = false;
    }

    if (!rc) {
      setRcError("Rc number is required");
      isValid = false;
    }

    if (!carModel) {
      setCarModelError("Car model is required");
      isValid = false;
    }

    // Submit the form if all input values are valid
    if (isValid) {
      console.log("Driver form submitted!");
      // ... your form submission logic here
    }
    if(isValid)
    {
      signupContextForDriver({
        name:nameOfDriver,
        email: emailOfDriver,
        password: passwordOfDriver,
        aadhar:aadharOfDriver,
        phone: phoneOfDriver,
        rc: rc,
        licensePlate:licensePlate,
        carModel:carModel
      });
      setNameOfDriver("");
      setEmailOfDriver("");
      setPasswordOfDriver("");
      setPhoneOfDriver("");
      setAdhaarOfDriver("");
      setRc("");
      setLicensePlate("");
      setCarModel("");
    }
    
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
              <Tab label="Passenger" value="Passenger" />
              <Tab label="Driver" value="Driver" />
            </Tabs>
            {method === "Passenger" && (
              <form noValidate onSubmit={handleSubmitOfPassenger}>
                <Stack spacing={3}>
                <TextField
                    fullWidth
                    variant="filled"
                    label="Name"
                    name="name"
                    type="string"
                    value={nameOfPassenger}
                    onChange={(e) => handleNameChangeForPassenger(e)}
                    error={!!nameErrorForPassenger}
                    helperText={nameErrorForPassenger}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={emailOfPassenger}
                    onChange={(e) => handleEmailChangeForPassenger(e)}
                    error={!!emailErrorForPassenger}
                    helperText={emailErrorForPassenger}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                    value={passwordOfPassenger}
                    onChange={(e) => handlePasswordChangeForPassenger(e)}
                    error={!!passwordErrorForPassenger}
                    helperText={passwordErrorForPassenger}
                  />

                  <TextField
                    variant="filled"
                    label="Aadhar number"
                    name="aadhar"
                    type="string"
                    value={aadharOfPassenger}
                    onChange={(e) => handleAadharChangeForPassenger(e)}
                    error={!!aadharErrorForPassenger}
                    helperText={aadharErrorForPassenger}
                  />

                  <TextField
                    variant="filled"
                    label="Phone number"
                    name="phone"
                    type="string"
                    value={phoneOfPassenger}
                    onChange={(e) => handlePhoneChangeForPassenger(e)}
                    error={!!phoneErrorForPassenger}
                    helperText={phoneErrorForPassenger}
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
            {method === "Driver" && (
              <form noValidate onSubmit={handleSubmitOfDriver}>
                <Stack spacing={3}>
                <TextField
                    fullWidth
                    variant="filled"
                    label="Name"
                    name="name"
                    type="string"
                    value={nameOfDriver}
                    onChange={(e) => handleNameChangeForDriver(e)}
                    error={!!nameErrorForDriver}
                    helperText={nameErrorForDriver}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={emailOfDriver}
                    onChange={(e) => handleEmailChangeForDriver(e)}
                    error={!!emailErrorForDriver}
                    helperText={emailErrorForDriver}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                    value={passwordOfDriver}
                    onChange={(e) => handlePasswordChangeForDriver(e)}
                    error={!!passwordErrorForDriver}
                    helperText={passwordErrorForDriver}
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
                    value={aadharOfDriver}
                    onChange={(e) => handleAadharChangeForDriver(e)}
                    error={!!aadharErrorForDriver}
                    helperText={aadharErrorForDriver}
                  />
                    <TextField
                      variant="filled"
                      label="Phone number"
                      name="phone"
                      type="string"
                      value={phoneOfDriver}
                      onChange={(e) => handlePhoneChangeForDriver(e)}
                      sx={{ width: "48%" }}
                      error={!!phoneErrorForDriver}
                      helperText={phoneErrorForDriver}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="License Plate"
                    name="licensePlate"
                    type="string"
                    value={licensePlate}
                    onChange={(e) => handleLicensePLateChange(e)}
                    error={!!licensePlateError}
                    helperText={licensePlateError}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Rc number"
                    name="rc"
                    type="string"
                    value={rc}
                    onChange={(e) => handleRcChange(e)}
                    error={!!rcError}
                    helperText={rcError}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Car model"
                    name="carModel"
                    type="string"
                    value={carModel}
                    onChange={(e) => handleCarModelChange(e)}
                    error={!!rcError}
                    helperText={rcError}
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
