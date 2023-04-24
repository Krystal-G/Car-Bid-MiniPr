import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Modal from '@mui/material/Modal';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

export default function RideListDriverItem({ ride }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ListItem key={ride.users[0]._id} onClick={handleOpen}>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={ride.org.orgName}
                    secondary={`starting from ${ride.users[0].pickupLocation} at ${ride.users[0].pickupTime}`}
                />
            </ListItem>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx = {style}>
                <Stepper orientation="vertical">
                    {ride.users.map((step, index) => (
                        <Step active={true} key={step.label}>
                            <StepLabel
                                icon={
                                    <Avatar
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiB9yl1za6EvJltqYre7MABVe3uMPWGhtbQ&usqp=CAU"
                                        sx={{ borderRadius: "20%", height: "30px", width: "30px" }}
                                    />
                                }
                            >
                                {step.name}
                            </StepLabel>
                            <StepContent>
                                <Typography variant="body2" align={"left"}>
                                    {`from ${step.pickupLocation} at ${step.pickupTime}`}
                                </Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                </Box>
            </Modal>
        </>

    )
}