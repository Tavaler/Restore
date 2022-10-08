import {
<<<<<<< HEAD
  TableCell,  TableRow,  TableHead,  TableBody,  Table,  TableContainer,  Button,  Paper,
=======
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableContainer,
  Button,
  Paper,
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
} from "@mui/material";
import React, { useEffect, useState } from "react";
import agent from "../../App/api/agent";
import LoadingComponent from "../../App/layout/LoadingComponent";
import { Order } from "../../App/model/Order";
import { currencyFormat } from "../../App/util/util";
<<<<<<< HEAD
 
export default function OrderPage() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
 
=======
export default function OrderPage() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  useEffect(() => {
    agent.Orders.list()
      .then((orders) => setOrders(orders))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
<<<<<<< HEAD
 
  if (loading) return <LoadingComponent message="Loading orders" />;
 
=======
  if (loading) return <LoadingComponent message="Loading orders" />;
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.id}
              </TableCell>
              <TableCell align="right">{currencyFormat(order.total)}</TableCell>
              <TableCell align="right">
                {order.orderDate.split("T")[0]}
              </TableCell>
              <TableCell align="right">{order.orderStatus}</TableCell>
              <TableCell align="right">
                <Button>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
