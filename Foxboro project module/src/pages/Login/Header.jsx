import React from "react";
// import Logo from "./assets/foxboro.png";
import { Grid2, Typography, Box } from "@mui/material";
import foxlogos from "../../../public/assets/foxlogo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
  return (
    <>
      <Grid2 container bgcolor="#080c0f" color="#fff" p={0.5}>
        <Grid2
          size={{ xs: 12, sm: 12, md: 8, lg: 11}}
          display="flex"
          gap="2"
          alignItems="center"
        >
          <Box>
            <img src={foxlogos} style={{ width: "10rem", height: "6rem" }} />
          </Box>
          {/* Foxboro */}
          {/* Foxboro */}
          <Typography
          ml={3}
            sx={{
              fontSize: {
                xs: "110%", // small screens
                sm: "x-large", // medium screens
                md: "x-large", // large screens
                lg: "x-large", // extra-large screens
              },
            }}
          >
            Foxboro Instrument Company
            <Typography
              sx={{
                fontSize: {
                  xs: "small", // small screens
                  sm: "large", // medium screens
                  md: "large", // large screens
                  lg: "large", // extra-large screens
                },
              }}
            >
              Real Time Well Monitoring System
            </Typography>
          </Typography>
        </Grid2>
        <Grid2   size={{ xs: 12, sm: 12, md: 8, lg: 1}}>
          <Box  display="flex" alignItems="center" justifyContent="end" gap={1}>
            <Box p={2}>
              <AccountCircleIcon sx={{ color: 'white', fontSize: '400%' }} />
            </Box>
          </Box>
          </Grid2>
      </Grid2>
    </>
  );
}

export default Header;
