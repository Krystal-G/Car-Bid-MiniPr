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
  useEffect(() =>
  {
    getOrgById();
  },[]);
  
  if (loading) {
    return (<ReCard>
    <CardHeader sx={{textAlign:'left'}} title="Organisation Info" />
    <Divider variant="middle" />
    <CardContent>
      loading
    </CardContent>
  </ReCard>)
  }
  
  const orgInfo = {
    Name: orgDetails.name,
    orgTime: orgDetails.orgTime
  };
  
  return (
    <ReCard>
      <CardHeader sx={{textAlign:'left'}} title="Organisation Info" />
      <Divider variant="middle" />
      <CardContent>
        <Text first="Name" second={orgInfo.Name} />
        <Text first="Org Time" second={orgInfo.orgTime} />
      </CardContent>
    </ReCard>
  );
};

export default OrganisationInfo;
