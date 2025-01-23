import React from "react";
import Box from '@mui/material/Box';
import { Grid2, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function userProfile() {
  return (
    <>
          <Grid2
        
        display="flex"
        justifyContent={"center"}
        alignItems='center'
        bgcolor={"#c2d3ed"}
        height={"100vh"}
      >
        <Grid2  height={'80vh'} bgcolor={"yellowgreen"}>
          <Box bgcolor={'yellow'} display='flex' justifyContent='center'>
          <AccountCircleIcon fontSize="large" />
          <Typography variant="h5">Your name</Typography>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default userProfile;
