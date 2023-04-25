import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Text from "./Text";
import Divider from "@mui/material/Divider";
import { MainState } from "../../context/MainContext";
import ReCard from './ReCard';
import { useEffect } from "react";

const OrganisationInfo = () => {
  const {getOrgById,orgDetails,loading} = MainState();
  const CurrentUser = JSON.parse(localStorage.getItem("userInfo")).userInf;
  
  if(CurrentUser.role === "passenger"){
    const orgInfo = {
      Name: orgDetails.name,
      organizationTime: orgDetails.orgTime
    };
    
    return (
      <ReCard>
        <CardHeader sx={{textAlign:'left'}} title="Organisation Info" />
        <Divider variant="middle" />
        <CardContent>
          <Text first="Name" second={orgInfo.Name} />
          <Text first="Org Time" second={orgInfo.organizationTime} />
        </CardContent>
      </ReCard>
    );
  }
  
};

export default OrganisationInfo;
