import { createSlice } from "@reduxjs/toolkit";

// initial state for Login
const initialState = {
  username: "",
  password: "",
  otp: "",
  isAuthenticated: false,
  authToken: null,  // Store authToken in Redux
  role: "employee",  // Store role in Redux (default to employee)
  organization: "",
};

// initial state for Signup
const registerInitialState = {
  username: "",
  email: "",
  contactNumber: "",
  employeeID: "",
  organizationName: "",
  department: "",
  roleInRTMS: "",
  idCardPhoto: "", // this is Image Upload by the user
  passportPhoto: "", // this is Image Upload by the user
  emailOtp: "",
  isAuthenticated: false,
};

// initial state for check status
const checkInitialState = {
  checkAuth: {
    username: "",
    email: "",
    contactNumber: "",
    employeeID: "",
    organizationName: "",
    department: "",
    roleInRTMS: "",
    idCardPhoto: "", //here ftech image URL
    passportPhoto: "", //here ftech image URL
  },
  isAuthenticated: false,
};

//initial state for forgot password
const forgotInitialState = {
  email: "",
  newPassword: "",
  confirmPassword: "",
  otp: "",
  isAuthenticated: false,
};

// oragnization
const oragnizationInitialState = {
  organizationName: "",
  username: "",
  password: "",
  email: "",
  contactNumber: "",
  emailOtp: "",
  isAuthenticated: false,
};


//for login
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginDetails: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken  = action.payload; // Store the token in Redux
    },
    setRole: (state, action) => {
      state.role = action.payload; // Store the role in Redux
    },
    setOrganizationName: (state, action) => {
      state.organization = action.payload;
    },
    clearAuth: (state) => {
      state.username = "";
      state.password = "";
      state.otp = "";
      state.isAuthenticated = false;
      state.authToken = null; // Clear the token
      state.role = "employee"; // Clear the role
      state.organization = ""; // clear organization name
    },
  },
});

// For registration
const registerAuthSlice = createSlice({
  name: "registerAuth",
  initialState: registerInitialState,
  reducers: {
    setRegisterDetails: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.contactNumber = action.payload.contactNumber;
      state.employeeID = action.payload.employeeID;
      state.organizationName = action.payload.organizationName;
      state.department = action.payload.department;
      state.roleInRTMS = action.payload.roleInRTMS;
      state.idCardPhoto = action.payload.idCardPhoto; // this is Image Upload by the user
      state.passportPhoto = action.payload.passportPhoto; // this is Image Upload by the users
    },
    setEmailOtp: (state, action) => {
      state.emailOtp = action.payload;
    },
    setRegisterAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearRegisterAuth: (state) => {
      state.username = "";
      state.email = "";
      state.contactNumber = "";
      state.employeeID = "";
      state.organizationName = "";
      state.department = "";
      state.roleInRTMS = "";
      state.idCardPhoto = ""; // this is Image Upload by the user
      state.passportPhoto = ""; // this is Image Upload by the user
      state.emailOtp = "";
      state.isAuthenticated = false;
    },
  },
});

//for check status
const checkAuthSlice = createSlice({
  name: "checkStatusAuth",
  initialState: checkInitialState,
  reducers: {
    setCheckDetails: (state, action) => {
      state.checkAuth = action.payload; // Storing all fetched data in `checkAuth`
    },
    setCheckAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearCheckAuth: (state) => {
      state.checkAuth = {}; // Clearing auth details on logout/clear
    },
  },
});

//for forgot api
const forgotAuthSlice = createSlice({
  name: "forgotAuth",
  initialState: forgotInitialState,
  reducers: {
    setForgotDetails: (state, action) => {
      state.email = action.payload.email;
    },
    setForgotEmailOtp: (state, action) => {
      state.otp = action.payload;
    },
    setForgotAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearForgotAuth: (state) => {
      state.email = "";
      state.newPassword = "";
      state.confirmPassword = "";
      state.otp = "";
      state.isAuthenticated = false;
    },
  },
});

const wellDetailsSlice = createSlice({
  name: "wellDetails",
  initialState: {
    location: "",
    installation: "",
    wellType: "",
    wellNumber: "",
  },
  reducers: {
    setWellDetails: (state, action) => {
      return action.payload;
    },
    clearWellDetails: (state) => {
      return {
        location: "",
        installation: "",
        wellType: "",
        wellNumber: "",
      };
    },
  },
});

// Export actions
export const {
  setLoginDetails,
  setOtp,
  setAuthenticated,
  setAuthToken,
  setRole,
  setOrganizationName,
  clearAuth,
} = authSlice.actions;
export const {
  setRegisterDetails,
  setEmailOtp,
  setRegisterAuthenticated,
  clearRegisterAuth,
} = registerAuthSlice.actions;
export const { setCheckDetails, setCheckAuthenticated, clearCheckAuth } =
  checkAuthSlice.actions;

export const {
  setForgotDetails,
  setForgotEmailOtp,
  setForgotAuthenticated,
  clearForgotAuth,
} = forgotAuthSlice.actions;

export const { setWellDetails, clearWellDetails } = wellDetailsSlice.actions;

// Export reducers with unique names
export const authReducer = authSlice.reducer;
export const registerAuthReducer = registerAuthSlice.reducer;
export const checkAuthReducer = checkAuthSlice.reducer;
export const forgotAuthReducer = forgotAuthSlice.reducer;
export default wellDetailsSlice.reducer;
