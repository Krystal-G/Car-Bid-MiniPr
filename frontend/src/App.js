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

function App() {
  // const {} = React.useContext(MainContext);
  const user = JSON.parse(localStorage.getItem("userInfo")).userInf;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/corpac" element={<CorporateAccountsLandingPage />} />
      {!user && <Route path="/login" element={<Auth />} />}
      {!user.user.organization && <Route path="/corpacauth" element={<CorporateAccountAuth />} />}
      {user.role==="passenger" && <Route path="/userinfo" element={<UserInfo />} />}
      {user.role==="driver" && <Route path="/driverinfo" element={<DriverInfo />} />}
      {user && <Route path="/profile" element={<Profile />} />}
      {!user.user.isAdmin && <Route path="/createorg" element={<CorporateAccountAuthForCreate />} />}

      {user.user.isAdmin && <Route path="/admindashboard" element={<AdminDashboard />} />}
      {user.user.isAdmin && <Route path="/employeelist" element={<EmployeeList />} />}
      {user.user.isAdmin && <Route path="/driverlist" element={<DriverList />} />}

    </Routes>

  );
}

export default App;
