import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ReCard from './ReCard';
import Divider from "@mui/material/Divider";
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { MainState } from "../../context/MainContext";

export default function OrganizationInfoListDriver() {
    const { allOrgDetails,loading } = MainState();
    const [driverOrgs, setDriverOrgs] = React.useState([]);
    const CurrentUser = JSON.parse(localStorage.getItem("userInfo")).userInf;
    const filterOrgs = () => {
        // console.log(allOrgDetails)
        const temp = [];
        allOrgDetails.forEach((org) => {
            if (org.drivers.find((driver) => driver === CurrentUser.user._id)) {
                temp.push(org);
            }
        })
        
        setDriverOrgs(temp);
    }
    useEffect(() => {
        filterOrgs();
    }, [allOrgDetails])
    
    if(driverOrgs.length === 0){
        return (<ReCard>
            <CardHeader sx={{ textAlign: 'left' }} title="Organisation Info" />
            <Divider variant="middle" />
            <CardContent>
                No Organisations
            </CardContent>
        </ReCard>)
    }
    return (
        <ReCard>
            <CardHeader sx={{ textAlign: 'left' }} title="Organisations Info" />
            <Divider variant="middle" />
            <CardContent>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        driverOrgs.map((org) => {
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={org.name} secondary={`Organization Time : ${org.orgTime}`} />
                                </ListItem>
                            )

                        })
                    }
                </List>
            </CardContent>
        </ReCard>

    );
}
