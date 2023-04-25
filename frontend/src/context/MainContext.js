import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Main = createContext();
const API = axios.create({
  baseURL: "https://car-bid-minipr-backend.onrender.com/api",
});



const MainContext = ({ children }) => {
  const navigate = useNavigate();
  const [orgDetails, setOrgDetails] = useState({});
  const [allOrgDetails, setAllOrgDetails] = useState([]);
  const [allRides, setAllRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userRideInfo, setUserRideInfo] = useState(null);
  const [driverRideInfo, setDriverRideInfo] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const [driverList, setDriverList] = useState([]);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const signupContextForDriver = async (userInfo) => {
    try {
      const response = await API.post("/auth/signup/driver", {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        aadharNo: userInfo.aadhar,
        phoneNo: userInfo.phone,
        licensePlate: userInfo.licensePlate,
        rcNo: userInfo.rc,
        carModel: userInfo.carModel,
      });
      // console.log(response);
      const user = response.data.user;
      const role = response.data.role;
      const token = response.data.token;
      const userInf = { user, role, token };
      localStorage.setItem("userInfo", JSON.stringify({ userInf }));
      // console.log(localStorage.getItem("userInfo"));
      navigate('/');
      setNotification({
        open: true,
        message: "Driver Registered Successfully",
        severity: "success",
      });

      // localStorage.setItem("userInfo", JSON.stringify({ user }));
      // navigate('/');
    } catch (err) {
      // console.log(err);
      setNotification({
        open: true,
        message: err.response.data.error,
        severity: "error",
      });
    }
  };
  const signupContextForPassenger = async (userInfo) => {
    try {
      const response = await API.post("/auth/signup/user", {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        aadharNo: userInfo.aadhar,
        phoneNo: userInfo.phone,
      });
      // console.log(response);
      const user = response.data.user;
      const role = response.data.role;
      const token = response.data.token;
      const userInf = { user, role, token };
      localStorage.setItem("userInfo", JSON.stringify({ userInf }));
      // console.log(localStorage.getItem("userInfo"));
      navigate('/');
      setNotification({
        open: true,
        message: "User Registered Successfully",
        severity: "success",
      });
      // console.log(user);
    }
    catch (err) {
      // console.log(err);
      setNotification({
        open: true,
        message: err.response.data.error,
        severity: "error",
      });
    }
  };
  const userLogin = async (userInfo) => {
    try {
      const response = await API.post("/auth/login", {
        email: userInfo.email,
        password: userInfo.password,
      });
      // console.log(response);
      const user = response.data.user;
      const role = response.data.role;
      const token = response.data.token;
      const userInf = { user, role, token };
      localStorage.setItem("userInfo", JSON.stringify({ userInf }));
      navigate('/');
      setNotification({
        open: true,
        message: "User Logged In Successfully",
        severity: "success",
      });

    } catch (err) {
      // console.log(err);
      setNotification({
        open: true,
        message: err.response.data.error,
        severity: "error",
      });
    }
  };
  const joinDriverToOrg = async (userInfo) => {
    try {
      const response = await API.post("/organizations/join/driver", {
        driverId: userInfo.driverId,
        organizationName: userInfo.organizationName,
      });
      // console.log(response);
      const user = response.data.user;
      // console.log(JSON.parse(localStorage.getItem("userInfo")).userInf);
      const role = JSON.parse(localStorage.getItem("userInfo")).userInf.role;
      const token = JSON.parse(localStorage.getItem("userInfo")).userInf.token;
      const userInf = { user, role, token };
      localStorage.clear();
      localStorage.setItem("userInfo", JSON.stringify({ userInf }));
      // console.log(localStorage.getItem("userInfo"));
      navigate('/driverinfo');
      setNotification({
        open: true,
        message: "Driver Joined Successfully",
        severity: "success"
      });
    } catch (err) {
      setNotification({
        open: true,
        message: err.response.data.error,
        severity: "error"
      });
    }
  };
  const joinUserToOrg = async (userInfo) => {
    try {
      // console.log(userInfo);
      const response = await API.post("/organizations/join/user", {
        userId: userInfo.userId,
        orgId: userInfo.orgId,
        location: userInfo.location
      });
      // console.log(response);
      let user = response.data.user;
      const orgId = response.data.user.organization._id;
      user.organization = orgId;
      let userInf = JSON.parse(localStorage.getItem("userInfo")).userInf;
      userInf.user = user;
      localStorage.clear();
      localStorage.setItem("userInfo", JSON.stringify({ userInf }));
      // console.log(localStorage.getItem("userInfo"));  
      navigate('/userinfo');
      setNotification({
        open: true,
        message: "User Joined Successfully",
        severity: "success"
      });

    } catch (err) {
      setNotification({
        open: true,
        message: err.response.data.error,
        severity: "error"
      });
    }

  };
  const createOrg = async (formInfo) => {
    try {
      const response = await API.post("/organizations/create", {
        userId: formInfo.userId,
        organizationName: formInfo.organizationName,
        organizationDescription: formInfo.organizationDescription,
        organizationAddress: formInfo.organizationAddress,
        orgTime: formInfo.orgTime
      });
      // console.log(response);
      let user = response.data.user;
      let orgId = response.data.user.organization._id;
      user.organization = orgId;
      let userInf = JSON.parse(localStorage.getItem("userInfo")).userInf;
      userInf.user = user;
      localStorage.clear();
      localStorage.setItem("userInfo", JSON.stringify({ userInf }));
      navigate('/admindashboard');
      setNotification({
        open: true,
        message: "Organization Created Successfully",
        severity: "success"
      });
    } catch (err) {
      setNotification({
        open: true,
        message: err.response.data.error,
        severity: "error"
      });
    }
  };
  const getOrgById = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo")).userInf.user;
    setLoading(true);
    const response = await API.get(`/organizations/${user.organization}`);
    setOrgDetails(response.data.organization);
    setLoading(false);
  };

  const getAllOrg = async () => {
    setLoading(true);
    const response = await API.get("/organizations/");
    setAllOrgDetails(response.data.organizations);
    setLoading(false);
    // console.log(allOrgDetails);
  };
  const getRideById = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).userInf.user._id;
    setLoading(true);
    const response = await API.get(`/rides/user/${id}`);
    // console.log(response);
    setUserRideInfo(response.data);
    setLoading(false);
  };
  const getRidesByDriverId = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).userInf.user._id;
    setLoading(true);
    const response = await API.get(`/rides/driver/${id}`);
    // console.log(response.data);
    setDriverRideInfo(response.data);
    setLoading(false);
  };
  const getRidesByOrganisationId = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).userInf.user.organization;
    setLoading(true);
    const response = await API.get(`/organizations/getRides/${id}`);
    console.log(response.data.result);
    // const unique = [...new Set(response.data.result.map(item => item.driverName))];

    // remvoing duplicate values
    const unique = response.data.result.filter((v, i, a) => a.findIndex(t => (t.driverName === v.driverName)) === i);
    
    console.log(unique);
    setAllRides(unique);

    setLoading(false);
  }
  const getAllEmployees = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).userInf.user.organization;
    setLoading(true);
    const response = await API.get(`/organizations/getEmployees/${id}`);
    // console.log(response.data.result);
    setEmployeeList(response.data.result);
    setLoading(false);
  }
  const getAllDrivers = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).userInf.user.organization;
    setLoading(true);
    const response = await API.get(`/organizations/getDrivers/${id}`);
    // console.log(response.data.result);
    setDriverList(response.data.result);
    setLoading(false);
  }
  const assignRides = async () => {
    try {
      setLoading(true);
      const response = await API.post(`/organizations/assignRides`, {
        adminId: JSON.parse(localStorage.getItem("userInfo")).userInf.user._id,
      });
      setLoading(false);
      // console.log(response);
      setNotification({
        open: true,
        message: "Rides Assigned Successfully. Please Wait...",
        severity: "success"
      });
      getRidesByOrganisationId();
    } catch (err) {
      setNotification({
        open: true,
        message: err.response.data.error,
        severity: "error"
      });
    }
  }
  return (
    <Main.Provider
      value={{
        signupContextForDriver,
        signupContextForPassenger,
        userLogin,
        joinDriverToOrg,
        joinUserToOrg,
        createOrg,
        getOrgById,
        orgDetails,
        getAllOrg,
        allOrgDetails,
        getRideById,
        getRidesByDriverId,
        getRidesByOrganisationId,
        driverRideInfo,
        allRides,
        loading,
        userRideInfo,
        getAllDrivers,
        getAllEmployees,
        employeeList,
        driverList,
        assignRides,
        notification,
        setNotification
      }}
    >
      {children}
    </Main.Provider>
  );
};

export default MainContext;

export const MainState = () => {
  return useContext(Main);
};
