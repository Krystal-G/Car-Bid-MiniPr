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
import RideListDriverItem from "./RideListDriverItem";
import { MainState } from "../../context/MainContext";

export default function OrganizationInfoListDriver() {
    const {driverRideInfo} = MainState();
    return (
        <ReCard>
            <CardHeader sx={{ textAlign: 'left' }} title="Rides Info" />
            <Divider variant="middle" />
            <CardContent>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        driverRideInfo.map((ride) => {
                            return (
                                <RideListDriverItem ride={ride} />
                            );
                        })
                    }
                </List>
            </CardContent>
        </ReCard>

    );
}
