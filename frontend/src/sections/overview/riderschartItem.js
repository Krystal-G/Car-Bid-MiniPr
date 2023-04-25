import React, { useState, useEffect } from 'react';
import { TableRow, TableCell } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';    
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };
const RidersChartItem = ({ order }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <TableRow
                hover
                key={order.licensePlate}
                onClick={handleOpen}
            >
                <TableCell>
                    {order.licensePlate}
                </TableCell>
                <TableCell>
                    {order.driverName}
                </TableCell>
                <TableCell>
                    {order.passengers[0].pickupTime}
                </TableCell>
                <TableCell>
                    {order.passengers[0].pickUpLocation}
                </TableCell>
            </TableRow>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Stepper orientation="vertical">
                        {order.passengers.map((step, index) => (
                            <Step active={true} key={step.label}>
                                <StepLabel
                                    icon={
                                        <Avatar  sx={{ borderRadius: "20%", height: "30px", width: "30px" }}
                                            >{step.name.substring(0,1).toUpperCase()}</Avatar>
                                        
                                    }
                                >
                                    {step.name}
                                </StepLabel>
                                <StepContent>
                                    <Typography variant="body2" align={"left"}>
                                        {`from ${step.pickUpLocation} at ${step.pickupTime}`}
                                    </Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Modal></>
    );
}
export default RidersChartItem;