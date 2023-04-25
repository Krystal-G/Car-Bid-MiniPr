import PropTypes from 'prop-types';
import React from 'react';
import Button from '@mui/material/Button';
import BellAlertIcon from '@heroicons/react/24/solid/BellAlertIcon';
import { Alert, Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { MainState } from '../../context/MainContext';
export const Pending = (props) => {
  const { value, sx } = props;
  const {assignRides} = MainState();

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={7}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
             Assigned Rides
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            
            <SvgIcon>
              <BellAlertIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Stack spacing={5} sx={{ marginLeft: 'auto',marginTop :'19px'}}>
    <Button variant="outlined" onClick={assignRides}>Assign Rides</Button>
  </Stack>

      </CardContent>
  
    </Card>
  );
};

Pending.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};