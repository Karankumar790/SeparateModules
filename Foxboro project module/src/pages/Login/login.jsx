//Api Integration Using Store In Redux
import React, { useState } from "react";
import {
  Button,
  Grid2,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Card,
  CardContent,
} from "@mui/material";
import PageContainer from "../Login/PageConstainer";
import HttpsIcon from "@mui/icons-material/Https";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

function login() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [visible, setVisible] = useState(false);

  const handleClickShowPassword = () => {
    setVisible((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputs = (e) => {
    setFormValues((pre) => ({ ...pre, [e.target?.name]: e.target?.value }));
  };

  return (
    <PageContainer
      className="login-form-bg-image"
      showfooter="true"
      showheader="true"
    >
      <Grid2
        display={"flex"}
        alignItems={"center"}
        height="100%"
        padding={"5%"}
      >
        <Card style={{ backgroundColor: "#a5c8d1", borderRadius: "20px" }}>
          <CardContent orientation="vertical">
            <Grid2
              size={{ md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center" }}
            >
              <Typography
                pt={2}
                sx={{
                  fontSize: {
                    xs: "xx-large",
                    sm: "xxx-large",
                    md: "xxx-large",
                    lg: "xxx-large",
                  },
                }}
              >
                Welcome
              </Typography>
              <Typography
                fontSize="medium"
                sx={{
                  fontSize: {
                    xs: "medium",
                    sm: "large",
                    md: "large",
                    lg: "large",
                  },
                }}
                color="darkgreen"
              >
                Real Time Well Monitoring System
              </Typography>
            </Grid2>
            <Grid2 alignItems={"center"}>
              <form onSubmit={""}>
                <Grid2 container padding={"5%"} spacing={2}>
                  <Grid2
                    size={{ md: 12, sm: 12, xs: 12 }}
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <AccountCircle
                      sx={{ color: "action.active", mr: 1 }}
                      fontSize="large"
                    />
                    <TextField
                      className="custom-textfield"
                      label="Username"
                      name="username"
                      variant="standard"
                      value={formValues?.username}
                      onChange={handleInputs}
                      required
                      fullWidth
                    />
                  </Grid2>
                  <Grid2
                    size={{ md: 12, sm: 12, xs: 12 }}
                    sx={{ display: "flex", alignItems: "flex-end" }}
                    mt="5%"
                  >
                    <HttpsIcon
                      sx={{ color: "action.active", mr: 1 }}
                      fontSize="large"
                    />
                    <TextField
                      className="custom-textfield"
                      variant="standard"
                      name="password"
                      type={visible ? "text" : "password"}
                      label="Password"
                      value={formValues.password}
                      onChange={handleInputs}
                      required
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {visible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid2>
                </Grid2>
                <Grid2
                  container
                  padding={5}
                  spacing={2}
                  direction="column"
                  py={2}
                >
                  <Grid2 item textAlign={"end"}>
                    <Link
                      to="/forgot"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Forgot Password
                    </Link>
                  </Grid2>
                  <Grid2 container>
                    <Button
                      variant="contained"
                      className="btn-primary"
                      fullWidth
                      type="submit"
                    >
                      Login
                    </Button>
                  </Grid2>
                  <Grid2 textAlign="center">
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "small",
                          sm: "large",
                          md: "large",
                          lg: "large",
                        },
                      }}
                    >
                      Don't have an account?
                      <Link
                        to="/signup"
                        style={{
                          textDecoration: "none",
                          margin: "4px",
                          cursor: "pointer",
                        }}
                      >
                        Sign Up
                      </Link>
                    </Typography>
                  </Grid2>
                </Grid2>
              </form>
            </Grid2>
          </CardContent>
        </Card>
      </Grid2>
    </PageContainer>
  );
}

export default login;
