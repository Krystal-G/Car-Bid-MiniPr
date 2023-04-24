import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        color: "#8330C2",
        display: "flex",
        justifyContent: "center",
        my: 5,
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}