import axios from "axios";
import { catchError } from "../helper/helper";
import { DEVICE_API, WELL_API } from "./Client";

// add location

export const addLocation = async (formData) => {
  try {
    const response = await axios.post(`${WELL_API}/add-location`, formData);
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

// GET ALL LOCATION
export const getLocation = async (organizationName) => {
  try {
    const response = await axios.get(
      `${WELL_API}/get-AllLocations?organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

//addInstallation on the basic of Location
export const addInstallation = async (formData) => {
  try {
    const response = await axios.post(
      `${WELL_API}/add-InstallationToLocation`,
      formData
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

// GET ALL LOCATION
export const getAllInstallation = async (location, organizationName) => {
  try {
    const response = await axios.get(
     `${WELL_API}/get-InstallationsByLocation?location=${location}&organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    console.error(error); // Log error for debugging
    return catchError(error); // Throw error to handle in the calling function
  }
};

export const getAllInstallations = async (organizationName) => {
  try {
    const response = await axios.get(
      `${WELL_API}/get-allInstallations?organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return catchError(error);
  }
};
// add well number
export const addWellNum = async (formData) => {
  try {
    const response = await axios.post(
      `${WELL_API}/save-WellTypeForInstallation`,
      formData
    );
    return response.data
  } catch (error) {
    return catchError(error);
  }
};

//  GET SELECTED  WELL INFO
export const getWellDetails = async (
  location,
  installationName,
  wellType,
  wellNumber,
  organizationName
) => {
  try {
    const response = await axios.get(
      `${WELL_API}/get-WellDetails?location=${location}&installation=${installationName}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return catchError(error);
  }
};

// export const saveWellAlarmDetails = async (location, installation, wellType, wellNumber, organizationName) => {
//   try {
//     const response = await axios.post(${WELL_API}/save-WellDetails?location=${location}&installation=${installation}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}, wellData);
//     return response.data;
//   } catch (error) {
//     console.error("Error saving well details:", error);
//     return catchError(error);
//   }
// };

export const saveWellDetails = async (details) => {
  try {
    const response = await axios.post(`${WELL_API}/save-WellDetails?location=${details.location}&installation=${details.installation}&wellType=${details.wellType}&wellNumber=${details.wellNumber}&organizationName=${details.organizationName}`,
      {
        landmark: details.landmark,
        latitude: details.latitude,
        longitude: details.longitude,
        nodeId: details.nodeId,
        alarmSettings: details.alarmSettings,
        flowing: details.flowing,
        notFlowing: details.notFlowing,
      }
    );
    return response.data; // or response if you need more info
  } catch (error) {
    console.error("Error saving well details:", error);
    return catchError;
  }
};

export const getLocationOfWell = async (wellNumber, organizationName) => {
  try {
    const response = await axios.get(
      `${WELL_API}/get-WellLocations?organizationName=${organizationName}&wellNumber=${wellNumber}`
    );
    return response.data;
  } catch (error) {
    console.error(error); // Log error for debugging
    return catchError; // Throw error to handle in the calling function
  }
};


// DEVICE ALL DATA API 
export const deviceData = async (organizationName) => {
  try {
    const response = await axios.get(
      `${DEVICE_API}/external-device-show?organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) { 
    console.error(error);
    return catchError;
    
  }
}

// DEVICE ALL DATA API 
export const wellMonitorData = async (organizationName) => {
  try {
    const response = await axios.get(
      `${DEVICE_API}/get-node-all-data-by-organization?organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return catchError;
    
  }
}


export const addParametersForWell = async (formData,location,installation,wellType,wellNumber,organizationName) => {
  try {
    const response = await axios.post(`${WELL_API}/save-wellConfiguration?location=${location}&installation=${installation}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}`, formData);
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

//Get Single Well Parameter Value
export const getParameterData = async (location, installation,wellType,wellNumber,organizationName,) => {
  try {
    const response = await axios.get(
      `${WELL_API}/get-wellConfiguration?location=${location}&installation=${installation}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export const simulatorData = async (formData) => {
  try {
    const response = await axios.post(`http://localhost:5000/generate-random-values`, formData);
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export const simulatorGetData = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/stream-random-values`);
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

//  Well node search
export const nodeSearch = async () => {
  try {
    const response = await axios.get(`${WELL_API}/get-wellNodeId`);
    return response.data;
  } catch (error) {
    console.error(error);
    return catchError;
  }
};

// Not flowing Well save API
export const notFlowing = async (
  location,
  installation,
  wellType,
  wellNumber,
  organizationName,
  pressures
) => {
  try {
    const response = await axios.post(
      `${WELL_API}/save-notFlowingCondition?location=${location}&installation=${installation}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}`,
      {
        notFlowing: {
          pressures: pressures,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return catchError;
  }
};

// Total well Details
export const totalWells = async () => {
  try {
    const response = await axios.get(`${WELL_API}/count-TotalWellNumbers`);
    return response.data;
  } catch (error) {
    console.error(error);
    return catchError;
  }
};

// ----------------Get AllWell Number------------------

export const AllWellNumbers = async (WellNumber) => {
  try {
    const response = await axios.get(`${WELL_API}/get-AllWellNumbers`);
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export const saveFlowingCondition = async (
  location,
  installation,
  wellType,
  wellNumber,
  organizationName,
  flowingData ,// Add this parameter to the function
) => {
  try {
    const response = await axios.post(
      `${WELL_API}/save-flowingCondition?location=${location}&installation=${installation}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}`, // Remove query params from URL
      {
        // location,
        // installation,
        // wellType,
        // wellNumber,
        // organizationName,
        flowing: flowingData, // Include flowing condition in the body
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error saving flowing condition:", error);
    throw error; // Rethrow to handle in UI if needed
  }
};

export const NotFlowingWell = async () => {
  try {
    const response = await axios.get(
      `${WELL_API}/count-AllNotFlowingConditionsForOrganization?organizationName=OIL AND NATURAL GAS CORPORATION`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export const FlowingWell = async () => {
  try {
    const response = await axios.get(
      `${WELL_API}/count-AllFlowingConditionsForOrganization?organizationName=OIL AND NATURAL GAS CORPORATION`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export const deleteLocation = async (location, organizationName) => {
  try {
    const response = await axios.post(
      `${WELL_API}/delete-location?location=${location}&organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

export const deleteInstallationOnLocation = async (location,installationName,organizationName) => {
  try {
    const response = await axios.post(
      `${WELL_API}/delete-installationToLocation?location=${location}&installationName=${installationName}&organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};
