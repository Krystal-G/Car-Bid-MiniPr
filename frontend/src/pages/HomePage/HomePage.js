import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomePageNavbar from "./HomePageNavbar";
import SocialMediaComponent from "./SocialMediaIcons";

const HomePage = () => {
  return (
    <Box sx={{ height: "100vh"}}>
      <Box>
        <HomePageNavbar />
      </Box>
      <Box
        sx={{
          mt: "10px",
          mx:'30px',
          borderRadius: "50px",
          display: "flex",
          flexDirection:'column',
          backgroundColor: "white",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            mt: "2px",
            ml: "auto",
            mr: "auto",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: { xs: '40px', md: '70px' },
          }}
        >
          Tagline
        </Typography>
      </Box>
      <Box
        sx={{
          mx:'30px',
          mt: "10px",
          borderRadius: "70px",
          display: "flex",
          flexDirection:'column',
          backgroundColor: "#8330C2",
          height: "80vh",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: { xs: '40px', md: '70px' },
            mx: "auto",
            mt: "0",
          }}
        >
          Features
        </Typography>
        
      </Box>
      <Box
        sx={{
          mt: "10px",
          ml: { xs: '10px', md: '20px' },
          mr: { xs: '10px', md: '20px' },
          borderRadius: "40px",
          display: "flex",
          backgroundColor: "white",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            ml: "auto",
            mr: "auto",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: { xs: '40px', md: '70px' },
          }}
        >
          Our Team
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: '50px', md: '500px' },
          mx: { xs: '10px', md: '30px' },
          borderRadius: "70px",
          display: "flex",
          backgroundColor: "black",
          height: { xs: '30vh', md: '50vh' },
          alignItems:'center',
          flexDirection: "column",
          mb:{ xs: '200px', md: '0px' }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            mt: "20px"
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: { xs: '40px', md: '70px' },
              ml: "20px",
            }}
          >
            Contact Us
          </Typography>
        </Box>
        <SocialMediaComponent/>
      </Box>
    </Box>
  );
};

export default HomePage;
