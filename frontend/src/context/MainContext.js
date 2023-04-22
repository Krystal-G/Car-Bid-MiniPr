import React, { createContext, useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Main = createContext();
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

var tmpUser = JSON.parse(localStorage.getItem("userInfo"));
export var CurrentLoggedInUser = {
  id:tmpUser?.user?.data?.user?._id,
  name:tmpUser?.user?.data?.user?.name,
  phoneNo:tmpUser?.user?.data?.user?.phoneNo,
  email:tmpUser?.user?.data?.user?.email,
  organization:tmpUser?.user?.data?.user?.organization
};
tmpUser = null;

const MainContext = ({ children }) => {
  const navigate = useNavigate();
  const [orgDetails, setOrgDetails] = useState({});
  const [allOrgDetails,setAllOrgDetails] = useState({});
  const [allRides, setAllRides] = useState({});
  const [loading,setLoading] = useState(false);
  const signupContextForDriver = async (userInfo) => {
    const user = await API.post("/auth/signup/driver", {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      aadharNo: userInfo.aadhar,
      phoneNo: userInfo.phone,
      licensePlate: userInfo.licensePlate,
      rcNo: userInfo.rc,
      carModel: userInfo.carModel,
    });
    localStorage.setItem("userInfo", JSON.stringify({ user }));
    navigate('/');
  };
  const signupContextForPassenger = async (userInfo) => {
    const user = await API.post("/auth/signup/user", {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      aadharNo: userInfo.aadhar,
      phoneNo: userInfo.phone,
    });
    
    localStorage.setItem("userInfo", JSON.stringify({ user }));
    navigate('/');
    // console.log(user);
  };
  const userLogin = async (userInfo) => {
    const user = await API.post("/auth/login", {
      email: userInfo.email,
      password: userInfo.password,
    });
    
    localStorage.setItem("userInfo", JSON.stringify({ user }));
    // const tmp = JSON.parse(localStorage.getItem("userInfo"));
    navigate('/');
    console.log(CurrentLoggedInUser.name);
  };
  const joinDriverToOrg = async (userInfo) => {
    const response = await API.post("/organizations/join/driver", {
      driverId: userInfo.driverId,
      organizationName: userInfo.organizationName,
    });
    navigate('/corpac');
    console.log(response);
  };
  const joinUserToOrg = async (userInfo) => {
    const response = await API.post("/organizations/join/user", {
      userId: userInfo.userId,
      orgId: userInfo.orgId,
      location: userInfo.location
    });
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
    navigate('/corpac');
  };
  const getOrgById = async () => {
    const id = CurrentLoggedInUser.organization;
    setLoading(true);
    const response = await API.get(`/organizations/${id}`);
    setOrgDetails(response.data.organization);
    setLoading(false);
    // console.log(response.data.organization);
  };
  
  const getAllOrg = async () => {
    setLoading(true);
    const response = await API.get("/organizations/");
    setAllOrgDetails(response.data.organizations);
    setLoading(false);
    // console.log(allOrgDetails);
  };
  const getRidesById = async () => {
    const id = CurrentLoggedInUser.id;
    console.log(id);
    setLoading(true);
    const response = await API.get(`/rides/user/${id}`);
    console.log(response);
    setAllRides(response);
    setLoading(false);
  };
  
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
        getRidesById,
        allRides,
        loading,
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
