import React, { useState } from "react";
import {
  Button,
  Grid2,
  Paper,
  TextField,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import account1 from "/assets/account1.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

function resetPassword() {
 const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Toggle visibility of passwords
    const handlePasswordVisibility = () => setShowPassword(!showPassword);
    const handleConfirmPasswordVisibility = () =>
      setShowConfirmPassword(!showConfirmPassword);
  return (
    <>
      <Grid2 height="100vh" size={{lg:10,md:10,sm:6,xs:2}} display='flex' alignItems='center' justifyContent='center' bgcolor="aqua">
        <Paper sx={{ borderRadius: "20px", border: "1px solid #ddd", p: 2,width:"40vw" }}>
          <form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid2 item>
                <Grid2 item textAlign="center">
                  <img
                    src={account1}
                    style={{ width: "100px" }}
                    alt="Account"
                  />
                </Grid2>
                <Grid2 item sx={{ textAlign: "center", pb: 1 }}>
                  <Typography variant="h4">Reset Password</Typography>
                </Grid2>
              </Grid2>
            </Box>
            <Box
              sx={{
                "& .MuiTextField-root": { my: 1 },
              }}
            >
              <TextField
                label="Enter Verification Code"
                variant="outlined"
                // value={forgotOtp}
                // onChange={(e) => setForgotOtp(e.target.value)}
                fullWidth
              />
              <TextField
                label="New Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirm Password"
                variant="outlined"
                type={showConfirmPassword ? "text" : "password"}
                // value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleConfirmPasswordVisibility}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
                color="primary"
                type="submit"
              >
                Change Password
              </Button>
              <Typography textAlign={"center"} pt={2}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Back to Login
                </Link>
              </Typography>
            </Box>
          </form>
        </Paper>
      </Grid2>
    </>
  );
}

export default resetPassword;
