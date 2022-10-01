import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { currencyFormat } from "../../App/util/util";
import { LoadingButton } from "@mui/lab";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Grid, Button } from "@mui/material";
import BasketSummary from "./BasketSummary";
import {Link} from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "./basketSlice";

export default function BasketPage() {


  const dispatch =  useAppDispatch()
  const { basket,status } = useAppSelector(state=>state.basket)
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Subtotal</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket?.items.map((item) => (
              <TableRow
                key={item.productId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <img
                      src={item.pictureUrl}
                      alt={item.name}
                      style={{ height: 50, marginRight: 20 }}
                    />
                    <span> {item.name}</span>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  {currencyFormat(item.price)}
                </TableCell>
                <TableCell align="center">
                  
                  <LoadingButton
                    loading={
                      status === "pendingRemoveItem"+ item.productId+"rem"
                    }
                    onClick={() =>
                      dispatch(
                        removeBasketItemAsync({
                          productId: item.productId,
                          quantity: 1,
                          name: "rem",
                        })
                      )
                    }

                    color="error"
                  >
                    <Remove />
                  </LoadingButton>
                  {item.quantity}
                  
                  <LoadingButton
                    loading={status === "pendingAddItem" + item.productId}
                    onClick={() =>
                      dispatch(
                        addBasketItemAsync({ productId: item.productId })
                      )
                    }
                    color="error"
                  >
                    <Add />
                  </LoadingButton>

                  
                </TableCell>
                <TableCell align="center">
                  {currencyFormat(item.price * item.quantity)}
                </TableCell>
                <TableCell align="center">

                <LoadingButton
                    loading={
                      status === "pendingRemoveItem"+ item.productId+"del"
                    }
                    onClick={() =>
                      dispatch(
                        removeBasketItemAsync({
                          productId: item.productId,
                          quantity: item.quantity,
                          name: "del",
                        })
                      )
                    }

                    color="error"
                  >
                    <Delete />
                  </LoadingButton>


                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            size="large"
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
