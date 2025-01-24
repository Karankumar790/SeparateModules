import React, { useState } from "react";
// import Logo from "./assets/foxboro.png";
import { Grid2, Typography, Box, IconButton, useMediaQuery, useTheme, Menu, MenuItem } from "@mui/material";
import foxlogos from "../../../public/assets/foxlogo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  const theme = useTheme(); // Correct theme hook import
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("User logged out");
    handleMenuClose();
  };
  return (
    <>
      <Grid2 container bgcolor="#080c0f" color="#fff" p={0.5}>
        <Grid2
          size={{ xs: 11, sm: 11, md: 11, lg: 11 }}
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
        <Grid2 size={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
          {/* <Box  display="flex" alignItems="center" justifyContent="end" gap={1}>
            <Box p={2}>
              <AccountCircleIcon sx={{ color: 'white', fontSize: '400%' }} />
            </Box>
          </Box> */}
          <Box>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="user menu"
              onClick={handleMenuOpen}
              sx={{
                fontSize: isMobile ? "medium" : "large", // Adjust icon size based on screen size
                ...(isMobile ? { marginRight: 0 } : { marginRight: 2 }),
              }}
            >
              <AccountCircleIcon sx={{ fontSize: isMobile ? 60 : 75 }} />{" "}
              {/* User Icon */}
            </IconButton>

            {/* User Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Link to="/user" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleLogout}>View Profile</MenuItem>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Link>
            </Menu>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Header;
