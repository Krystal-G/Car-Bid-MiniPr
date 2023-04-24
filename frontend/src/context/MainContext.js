import React, { createContext, useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Main = createContext();
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});



const MainContext = ({ children }) => {
  const navigate = useNavigate();
  const [orgDetails, setOrgDetails] = useState({});
  const [allOrgDetails,setAllOrgDetails] = useState([]);
  const [allRides, setAllRides] = useState([]);
  const [loading,setLoading] = useState(false);
  const [userRideInfo,setUserRideInfo] = useState(null);
  const [driverRideInfo,setDriverRideInfo] = useState([]);
  const [employeeList,setEmployeeList] = useState([]);
  const [driverList,setDriverList] = useState([]);
  const signupContextForDriver = async (userInfo) => {
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
    const userInf = {user,role,token};
    localStorage.setItem("userInfo", JSON.stringify({ userInf }));
    // console.log(localStorage.getItem("userInfo"));
    navigate('/');
    // localStorage.setItem("userInfo", JSON.stringify({ user }));
    // navigate('/');
  };
  const signupContextForPassenger = async (userInfo) => {
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
    const userInf = {user,role,token};
    localStorage.setItem("userInfo", JSON.stringify({ userInf }));
    // console.log(localStorage.getItem("userInfo"));
    navigate('/');
    // console.log(user);
  };
  const userLogin = async (userInfo) => {
    const response = await API.post("/auth/login", {
      email: userInfo.email,
      password: userInfo.password,
    });
    // console.log(response);
    const user = response.data.user;
    const role = response.data.role;
    const token = response.data.token;
    const userInf = {user,role,token};
    localStorage.setItem("userInfo", JSON.stringify({ userInf }));
    // console.log(localStorage.getItem("userInfo"));
    navigate('/');
    // localStorage.setItem("userInfo", JSON.stringify({ user }));
    // // const tmp = JSON.parse(localStorage.getItem("userInfo"));
    // navigate('/');
    // console.log(localStorage.getItem("userInfo"));
  };
  const joinDriverToOrg = async (userInfo) => {
    const response = await API.post("/organizations/join/driver", {
      driverId: userInfo.driverId,
      organizationName: userInfo.organizationName,
    });
    // console.log(response);
    const user = response.data.user;
    // console.log(JSON.parse(localStorage.getItem("userInfo")).userInf);
    const role = JSON.parse(localStorage.getItem("userInfo")).userInf.role;
    const token = JSON.parse(localStorage.getItem("userInfo")).userInf.token;
    const userInf = {user,role,token};
    localStorage.clear();
    localStorage.setItem("userInfo", JSON.stringify({ userInf }));
    // console.log(localStorage.getItem("userInfo"));
    navigate('/corpac');
    // console.log(response);
  };
  const joinUserToOrg = async (userInfo) => {
    // console.log(userInfo);
    const response = await API.post("/organizations/join/user", {
      userId: userInfo.userId,
      orgId: userInfo.orgId,
      location: userInfo.location
    });
    // console.log(response);
    let user = response.data.user;
    let userInf = JSON.parse(localStorage.getItem("userInfo")).userInf;
    userInf.user = user;
    localStorage.clear();
    localStorage.setItem("userInfo", JSON.stringify({ userInf }));
    // console.log(localStorage.getItem("userInfo"));  
    navigate('/corpac');
  };
  const createOrg = async (formInfo) => {
    const response = await API.post("/organizations/create", {
      userId: formInfo.userId,
      organizationName: formInfo.organizationName,
      organizationDescription: formInfo.organizationDescription,
      organizationAddress: formInfo.organizationAddress,
      orgTime:formInfo.orgTime
    });
    // console.log(response);
    let user = response.data.user;
    let userInf = JSON.parse(localStorage.getItem("userInfo")).userInf;
    userInf.user = user;
    localStorage.clear();
    localStorage.setItem("userInfo", JSON.stringify({ userInf }));
    navigate('/corpac');
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
    // console.log(response.data.result);
    setAllRides(response.data.result);
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
    setLoading(true);
    const response = await API.post(`/organizations/assignRides`,{
      adminId : JSON.parse(localStorage.getItem("userInfo")).userInf.user._id,
    });
    setLoading(false);
    console.log(response);
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
        assignRides
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
