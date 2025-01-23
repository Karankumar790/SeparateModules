import React from "react";
// import Box from "@mui/material/Box";
// import { Grid2222, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Container,
  Grid2,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Box,
} from "@mui/material";
function userProfile() {
  const user = {
    username: "JohnDoe",
    email: "john.doe@example.com",
    contactNumber: "123-456-7890",
    employeeID: "EMP00123",
    organizationName: "Tech Solutions Inc.",
    department: "IT",
    roleInRTMS: "Administrator",
    idCardPhoto: "https://via.placeholder.com/150", // Replace with actual photo URL
    passportPhoto: "https://via.placeholder.com/150", // Replace with actual photo URL
  };
  return (
    <>
      {/* <Grid2222
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        bgcolor={"#c2d3ed"}
        height={"100vh"}
      >
        <Grid2222 height={"80vh"} width='60vw' bgcolor={"yellowgreen"}>
          <Box bgcolor={"yellow"} display="flex" justifyContent="center">
            <AccountCircleIcon fontSize="large" />
            <Typography variant="h5">Your name</Typography>
          </Box>
        </Grid2222>
      </Grid2222> */}
      <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
        <Card sx={{ borderRadius: 4, boxShadow: 3, padding: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            User Profile
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Avatar
                src={user.passportPhoto}
                alt="Passport Photo"
                sx={{
                  width: 150,
                  height: 150,
                  border: "4px solid #1976D2",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center", mt: 1, color: "#1976D2" }}
              >
                Passport Photo
              </Typography>
            </Box>
            <Box>
              <Avatar
                src={user.idCardPhoto}
                alt="ID Card Photo"
                sx={{
                  width: 150,
                  height: 150,
                  border: "4px solid #1976D2",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center", mt: 1, color: "#1976D2" }}
              >
                ID Card Photo
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <CardContent>
            <Grid2 container spacing={3}>
              {/* Each field is in a 2-column layout */}
              <Grid2 item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#555", fontWeight: "bold" }}
                >
                  Username:
                </Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {user.username}
                </Typography>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#555", fontWeight: "bold" }}
                >
                  Email:
                </Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {user.email}
                </Typography>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#555", fontWeight: "bold" }}
                >
                  Contact Number:
                </Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {user.contactNumber}
                </Typography>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#555", fontWeight: "bold" }}
                >
                  Employee ID:
                </Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {user.employeeID}
                </Typography>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#555", fontWeight: "bold" }}
                >
                  Organization Name:
                </Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {user.organizationName}
                </Typography>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#555", fontWeight: "bold" }}
                >
                  Department:
                </Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {user.department}
                </Typography>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#555", fontWeight: "bold" }}
                >
                  Role in RTMS:
                </Typography>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {user.roleInRTMS}
                </Typography>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default userProfile;
