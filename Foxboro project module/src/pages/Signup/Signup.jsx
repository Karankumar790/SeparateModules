import React, { useEffect, useState } from "react";
import {
  Grid2,
  Typography,
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
// import { useDispatch } from "react-redux";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PageContainer from "../Login/PageConstainer";
import CallIcon from "@mui/icons-material/Call";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [selectedPhotoName, setSelectedPhotoName] = useState(null);
  const [idCardName, setIdCardName] = useState(null); // To store the ID card photo name
  const [organizations, setOrganizations] = useState([]);
  const [departments, setDepartments] = useState("");
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    contactNumber: "",
    employeeID: "",
    organizationName: "",
    department: "",
    roleInRTMS: "",
    idCardPhoto: "", //this is Image Uploaded by User
    passportPhoto: "", //this is Image Uploaded by User
  });

  const handleUsernameChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setFormValues((prev) => ({
        ...prev,
        [name]: files[0], // Store the actual file object
      }));

      // Update file name for preview
      if (name === "passportPhoto") {
        setSelectedPhotoName(files[0].name);
      } else if (name === "idCardPhoto") {
        setIdCardName(files[0].name);
      }
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <PageContainer className="login-form-bg-image" showheader="true" showfooter="true">
      <Grid2 container display='flex' alignContent='center' height='100%'>
        <Grid2 item padding={2} width={600}>
          <Card style={{backgroundColor:'#a5c8d1' , borderRadius:'20px'}}>
            <CardContent orientation="vertical">
              <Grid2 item pt={1} sx={{ textAlign: "center" }}>
                <Typography variant="h4">Registration</Typography>

                <Typography variant="h6" color="darkgreen">
                  Create a New Foxboro
                   Account
                </Typography>
              </Grid2>
              <Grid2 item px={4} alignItems={"center"}>
                <form onSubmit={""}>
                  <Grid2
                    item
                    gap="9px"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        label="Username"
                        variant="standard"
                        name="username"
                        value={formValues.username}
                        onChange={handleUsernameChange}
                        required
                        fullWidth
                      />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <EmailIcon sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Email"
                        variant="standard"
                        name="email"
                        value={formValues.email}
                        onChange={handleUsernameChange}
                        required
                      />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <CallIcon sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Mobile"
                        name="contactNumber"
                        variant="standard"
                        value={formValues.contactNumber}
                        required
                        onChange={(e) => {
                          const value = e.target.value;
                          // Ensure the value starts with '+91'
                          if (value.startsWith("+91")) {
                            setFormValues((prev) => ({
                              ...prev,
                              contactNumber: value,
                            }));
                          } else {
                            setFormValues((prev) => ({
                              ...prev,
                              contactNumber: `+91${value}`,
                            }));
                          }
                        }}
                        placeholder="+91 (Mobile Number)"
                      />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <TextField
                        fullWidth
                        label="Employee ID"
                        name="employeeID"
                        variant="standard"
                        value={formValues.employeeID}
                        onChange={handleUsernameChange}
                        required
                      />
                    </Box>

                    {/* Organization Dropdown */}
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="organization-label">
                          Organization
                        </InputLabel>
                        <Select
                          labelId="organization-label"


                          name="organizationName"
                          required
                          value={formValues.organizationName}
                          onChange={""}
                          label="Organization"
                        >
                          {Array.isArray(organizations) &&
                          organizations.length > 0 ? (
                            organizations.map((org) => (
                              <MenuItem
                                key={org._id}
                                value={org.organizationName}
                              >
                                {org.organizationName}
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem value="">
                              No organizations available
                            </MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </Box>

                    {/* Department Dropdown */}
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="department-label">
                          Department
                        </InputLabel>
                        <Select
                          required
                          labelId="department-label"
                          name="department"
                          value={formValues.department}
                          onChange={(event) => {
                            const selectedDept = event.target.value;
                            setFormValues((prev) => ({
                              ...prev,
                              department: selectedDept,
                            }));
                          }}
                          label="Department"
                        >
                          {departments.length > 0 ? (
                            departments.map((dept) => (
                              <MenuItem
                                key={dept._id}
                                value={dept.departmentName}
                              >
                                {dept.departmentName}
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem value="">
                              No departments available
                            </MenuItem>
                          )}
                        </Select>
                      </FormControl>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <AccountCircle sx={{ mr: 1 }} fontSize="large" />
                      <FormControl fullWidth variant="standard">
                        <InputLabel>Role in RTMS</InputLabel>
                        <Select
                          required
                          name="roleInRTMS"
                          value={formValues.roleInRTMS}
                          onChange={handleUsernameChange}
                          label="Role in RTMS"
                        >
                          <MenuItem value="manager">Manager</MenuItem>
                          <MenuItem value="employee">Employee</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                    >
                      {/* <Box
                        sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
                      >
                        <CameraAltIcon sx={{ mr: 1 }} fontSize="large" />
                        <Button variant="outlined" component="label" fullWidth>
                          <input
                            required
                            type="file"
                            accept="image/*"
                            name="passportPhoto"
                            onChange={handleUsernameChange}
                            hidden
                          />
                          {!selectedPhotoName ? (
                            <Typography>Update Photo</Typography>
                          ) : (
                            <Typography variant="body2" color="textSecondary">
                              {selectedPhotoName}
                            </Typography>
                          )}
                        </Button>
                      </Box> */}

                      <Box
                        sx={{ display: "flex", alignItems: "flex-end", mb: 1, mt: 3 }}
                      >
                        <CameraAltIcon sx={{ mr: 1 }} fontSize="large" />
                        <Button variant="outlined" component="label" fullWidth>
                          <input
                            required
                            type="file"
                            accept="image/*"
                            name="idCardPhoto"
                            onChange={handleUsernameChange}
                            hidden
                          />
                          {!idCardName ? (
                            <Typography>Upload Document</Typography>
                          ) : (
                            <Typography variant="body2" color="textSecondary">
                              {idCardName}
                            </Typography>
                          )}
                        </Button>
                      </Box>
                    </Box>

                    <Button variant="contained" fullWidth type="submit">
                      Next
                    </Button>
                  </Grid2>
                </form>
                <Grid2 item textAlign="center" mt={0.5}>
                  <Typography fontSize={"medium"}>
                    Already have an account?{" "}
                    <Link
                      to="/"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Login
                    </Link>
                  </Typography>
                  <Typography fontSize={"medium"}>
                    Have Registration?{" "}
                    <Link
                      to="/Popup"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      Check Status
                    </Link>
                  </Typography>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </PageContainer>
  );
}

export default Signup;
