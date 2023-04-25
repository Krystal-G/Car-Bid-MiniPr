import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function FlashMessage(props) {
    const { message, severity, open, setNotification } = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotification({
            message: '',
            severity: '',
            open: false
        })
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severity}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
}

export default FlashMessage;