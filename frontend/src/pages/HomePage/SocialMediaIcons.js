import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialMediaComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        mt: "50px",
        "& svg": {
          fontSize: { xs: "50px", sm: "70px", md: "100px" },
          marginRight: "10px",
        },
      }}
    >
      <FacebookIcon sx={{ color: "white" }} />
      <LinkedInIcon sx={{ color: "white" }} />
      <TelegramIcon sx={{ color: "white" }} />
      <InstagramIcon sx={{ color: "white" }} />
      <TwitterIcon sx={{ color: "white" }} />
    </Box>
  );
};

export default SocialMediaComponent;
