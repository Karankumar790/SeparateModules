import React from "react";
import { Paper, Typography, TextField, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../Login/PageConstainer";

function forgot() {
  return (
    <>
      <PageContainer
        className="login-form-bg-image"
        showfooter="true"
        showheader="true"
      >
        <Grid2
          container
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            sx={{
              borderRadius: "20px",
              mx: "5%",
              width: "45rem",
              backgroundColor: "#a5c8d1",
            }}
          >
            <Grid2 item p={3}>
              <form>
                <Grid2 item mt={2}>
                  <Typography
                    variant="h5"
                    fontSize="x-large"
                    textAlign="center"
                  >
                    Forgot Your Password?
                  </Typography>
                </Grid2>
                <Grid2 item mt={2}>
                  <Typography fontSize="large" textAlign="center">
                    Enter Your Registered Email.
                  </Typography>
                </Grid2>
                <Grid2 item mt={3}>
                  <TextField
                    name="email"
                    label="Enter Email Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid2>
                <Grid2 item mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    // type="submit"
                  >
                    <Link to="/reset" style={{ textDecoration: "none" ,color: "white"}}>
                      Send Verification Code
                    </Link>
                  </Button>
                </Grid2>
                <Grid2 item mt={2} textAlign="center">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Back to Login
                  </Link>
                </Grid2>
              </form>
            </Grid2>
          </Paper>
        </Grid2>
      </PageContainer>
    </>
  );
}

export default forgot;
