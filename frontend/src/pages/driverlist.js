// import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import TablePagination from '@mui/material/TablePagination';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Typography,
  Link
} from '@mui/material';
// import { Scrollbar } from '../../components/scrollbar';
// import { SeverityPill } from '../../components/severity-pill';
import { MainState } from "../context/MainContext"
import RidersChartItem from "../sections/overview/riderschartItem"
import NavBar from '../components/Navbar/Navbar';
import Loading from '../components/Loading';

const DriverList = () => {
  const { getAllDrivers, driverList, loading } = MainState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    getAllDrivers();
  }, [])

  const handleChangePage = (
    event,
    newPage,
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  if (loading) {
    return <Loading />
  }
  if (driverList.length === 0) {
    return <Typography sx={{
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#000000",
      mt: 10
    }}>No drivers Joined</Typography>
  }
  return (
    <>
      <NavBar />
      <Card sx={{ height: "100%", m: 10 }}>
        <CardHeader title="Organization Drivers" />
        {/* <Scrollbar sx={{ flexGrow: 1 }}> */}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ "overflow-x": "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Index
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell sortDirection="desc">
                  Email
                </TableCell>
                <TableCell>
                  Phone No
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driverList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => {
                // const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={index}
                  >
                    <TableCell>
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      {order.name}
                    </TableCell>
                    <TableCell>
                      {order.email}
                    </TableCell>
                    <TableCell>
                      {order.phoneNo}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
        {/* </Scrollbar> */}
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <TablePagination
            component="div"
            count={Math.ceil(driverList.length / rowsPerPage)}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Link href="/admindashboard" sx={{textDecoration:"none"}}>
          Back
        </Link>
        </CardActions>
      </Card>
    </>

  );
};
export default DriverList;