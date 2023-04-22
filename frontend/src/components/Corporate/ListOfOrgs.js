import * as React from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MainState } from '../../context/MainContext';
import { Button } from '@mui/material';

const ListOfOrgs = () => {
const {getAllOrg,allOrgDetails,loading,joinDriverToOrg} = MainState();
const onClickJoin = (e) =>
{
  const CurrentUser = JSON.parse(localStorage.getItem("userInfo"));
  const userId = CurrentUser.user.data.user._id;
  console.log(userId)
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
      return <div>loading</div>;
    }
    
    if (!allOrgDetails.length) {
      return <div>No data found.</div>;
    }
    
    return (
      <div>
        {allOrgDetails.map((org) => (
          <Accordion key={org._id} disabled={org.orgTime === org.minStartTime}>
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