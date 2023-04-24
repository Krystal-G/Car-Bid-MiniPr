import PropTypes from 'prop-types';
import React from 'react';
import Button from '@mui/material/Button';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Link, Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
export const Riders = (props) => {
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
              Employees Joined
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
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
            sx={{ mt: 1 }}
          >

          </Stack>
        )}

        <Link href="/employeelist" sx={{ textDecoration: "none", width: "100%" }}>
          <Stack spacing={1} sx={{ marginLeft: 'auto', marginTop: '10px' }}>
            <Button variant="outlined" color="success">Employees</Button>
          </Stack>
        </Link>

      </CardContent>
    </Card >
  );
};

