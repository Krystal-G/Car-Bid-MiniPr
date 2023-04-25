import * as React from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MainState } from '../../context/MainContext';
import { Button } from '@mui/material';
import Loading from '../Loading';
const ListOfOrgs = () => {
const {getAllOrg,allOrgDetails,loading,joinDriverToOrg} = MainState();
const CurrentUser = JSON.parse(localStorage.getItem("userInfo"));
const onClickJoin = (e) =>
{
  
  const userId = CurrentUser.userInf.user._id;
  // console.log(userId)
  joinDriverToOrg({
    driverId:userId,
    organizationName:e
  })
}
    useEffect(() =>
    { 
        getAllOrg();
    },[])
    // console.log(allOrgDetails)
    if (loading) {
      return <Loading />;
    }
    
    if (!allOrgDetails.length) {
      return <div>No data found.</div>;
    }
    
    return (
      <div>
        {allOrgDetails.map((org) => (
          <Accordion key={org._id} disabled={Math.ceil(org.employees.length/4) <= org.drivers.length || CurrentUser.userInf.user.organizations.find((organization) => organization._id === org._id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{org.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>ReachTime: {org.orgTime}</Typography>
            </AccordionDetails>
            <Button onClick={() => onClickJoin(org.name)}>Join</Button>
          </Accordion>
        ))}
        
        
      </div>
    );
    
}
export default ListOfOrgs;