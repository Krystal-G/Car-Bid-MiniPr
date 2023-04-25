import React, { useState, useEffect } from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Driver } from '../sections/overview/driver';
// import {Graph} from '../sections/overview/graph';
import { Id } from '../sections/overview/id';
import { Riders } from '../sections/overview/riders';
import { Pending } from '../sections/overview/pending';
import { RidersChart } from '../sections/overview/riderschart'
import Loading  from '../components/Loading';
// import { fromUnixTime } from 'date-fns';
import { MainState } from '../context/MainContext';
import NavBar from '../components/Navbar/Navbar';

const now = new Date();

const AdminDashboard = () => {
  const { getRidesByOrganisationId, allRides, getAllDrivers,
    getAllEmployees,
    employeeList,
    driverList, loading } = MainState();
  const [filteredRides, setFilteredRides] = useState(allRides);
  const filterRides = () => {
    const temp = allRides.filter((ride) => {
      if(ride.driverName !== "") return ride
    });
    setFilteredRides(temp);
  }
  useEffect(() => {
    getRidesByOrganisationId();
    getAllDrivers();
    getAllEmployees();
  }, []);
  useEffect(() => {
    filterRides();
  }, [allRides]);
  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      {/* <Head>
      <title>
        Overview | Devias Kit
      </title>
    </Head> */}
    <NavBar/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor: 'backgroundInfo.main'
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <Id
                difference={12}
                positive
                sx={{ height: '100%' }}
                value={JSON.parse(localStorage.getItem('userInfo')).userInf.user.organization}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <Riders
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value={employeeList.length}
              />
            </Grid>

            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <Driver
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value={driverList.length}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <Pending
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value={allRides.length}
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={12}
            >
              <RidersChart
                orders={filteredRides}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );

}



export default AdminDashboard;