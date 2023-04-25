// import { format } from 'date-fns';
import PropTypes from 'prop-types';
import * as React from 'react';
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
  Typography
} from '@mui/material';
// import { Scrollbar } from '../../components/scrollbar';
// import { SeverityPill } from '../../components/severity-pill';
import { MainState } from '../../context/MainContext';
import RidersChartItem from "./riderschartItem"
import Loading from "../../components/Loading";
export const RidersChart = (props) => {
  const { loading } = MainState();
  const { orders = [], sx } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
    return (
      <Loading />
    )
  }

  return (
    <Card sx={sx}>
      <CardHeader title="Organization Rides" />
      {/* <Scrollbar sx={{ flexGrow: 1 }}> */}
      {
        orders.length === 0 ? <Typography variant="h6" sx={{textAlign: "center", my:4}}>No Rides</Typography> :
          <>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ "overflow-x": "auto" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Ride
                    </TableCell>
                    <TableCell>
                      Driver Name
                    </TableCell>
                    <TableCell sortDirection="desc">
                      Start Time
                    </TableCell>
                    <TableCell>
                      Start Location
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => {
                    // const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                    return (
                      <RidersChartItem order={order} key={index} />
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <TablePagination
                component="div"
                count={Math.ceil(orders.length / rowsPerPage)}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </CardActions>
          </>
      }
    </Card>
  );
};

RidersChart.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};