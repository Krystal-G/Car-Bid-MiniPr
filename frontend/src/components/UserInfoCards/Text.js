import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
const Text = ({ first, second }) => {
  return (
    <Box display={"flex"} flexDirection={"row"} mb={2}>
      <Typography
        display={"inline"}
        align={"left"}
        sx={{ fontWeight: "Bold" }}
        variant="body2"
        color="textSecondary"
        component="p"
        mr={1}
      >
        {`${first}:`}
      </Typography>

      <Typography
        display={"inline"}
        align={"left"}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {second}
      </Typography>
    </Box>
  );
};

export default Text;
