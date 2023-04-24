import PropTypes from 'prop-types';
import React from 'react';
import Button from '@mui/material/Button';

import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UserIcon';
import { Link, Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import NavBar from '../../components/Navbar/Navbar';

export const Driver = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}

        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Drivers Joined
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>

              <UsersIcon />

            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={7}
            >
            </Stack>
          </Stack>
        )}

        <Link href="/driverlist" sx={{ textDecoration: "none", width: "100%" }}>
          <Stack spacing={1} sx={{ marginLeft: 'auto', marginTop: '5px' }}>
            <Button variant="outlined" color="error">Drivers</Button>
          </Stack>
        </Link>

      </CardContent>

    </Card>
  );
};

Driver.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};