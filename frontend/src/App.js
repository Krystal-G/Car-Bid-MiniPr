// import './App.css';
// import React from 'react';
// import HomePage from './pages/HomePage/HomePage';
// import CorporateAccountsLandingPage from './pages/CorporateAccounts/CorporateAccountsLandingPage';
// function App() {
//   // const {} = React.useContext(MainContext);
//   return (
//     <HomePage/>
//     //<CorporateAccountsLandingPage/>
// =======
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Auth from "./pages/Auth";
import DriverInfo from "./pages/DriverInfo";
import CorporateAccountAuth from "./pages/CorporateAccountAuth";
import CorporateAccountsLandingPage from "./pages/CorporateAccounts/CorporateAccountsLandingPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import Profile from "./pages/Profile";
import CreateOrg from "./components/Corporate/CreateOrg";
import CorporateAccountAuthForCreate from "./pages/CorporateAccountAuthForCreate";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeList from "./pages/employeelist";
import DriverList from "./pages/driverlist";
import FlashMessage from "./components/FlashMessage";
import { MainState } from "./context/MainContext";

function App() {
  // const {} = React.useContext(MainContext);
  const {notification,setNotification} = MainState();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <>
      <FlashMessage message={notification.message} severity={notification.severity} open={notification.open} setNotification={setNotification} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/corpac" element={<CorporateAccountsLandingPage />} />
        {!user && <Route path="/login" element={<Auth />} />}
        {!user?.userInf.user.organization && <Route path="/corpacauth" element={<CorporateAccountAuth />} />}
        {user?.userInf.role === "passenger" && <Route path="/userinfo" element={<UserInfo />} />}
        {user?.userInf.role === "driver" && <Route path="/driverinfo" element={<DriverInfo />} />}
        {user && <Route path="/profile" element={<Profile />} />}
        {!user?.userInf?.user?.isAdmin && <Route path="/createorg" element={<CorporateAccountAuthForCreate />} />}

        {user?.userInf?.user?.isAdmin && <Route path="/admindashboard" element={<AdminDashboard />} />}
        {user?.userInf?.user?.isAdmin && <Route path="/employeelist" element={<EmployeeList />} />}
        {user?.userInf?.user?.isAdmin && <Route path="/driverlist" element={<DriverList />} />}

      </Routes>
    </>

  );
}

export default App;
