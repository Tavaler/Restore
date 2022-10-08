<<<<<<< HEAD
import { Add, Delete, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BasketItem } from "../../App/model/Basket";
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { currencyFormat } from "../../App/util/util";
import { addBasketItemAsync, removeBasketItemAsync } from "./basketSlice";
=======
import { Remove, Add, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { BasketItem } from "../../App/model/Basket";
import { useAppSelector, useAppDispatch } from "../../App/store/configureStore";
import { currencyFormat } from "../../App/util/util";
import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67

interface Props {
  items: BasketItem[];
  isBasket?: boolean;
}

export default function BasketTable({ items, isBasket = true }: Props) {
<<<<<<< HEAD

  const dispatch = useAppDispatch();
  const { basket, status } = useAppSelector((state) => state.basket);

=======
  const { basket, status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
<<<<<<< HEAD
            <TableCell align="center">Subtotal</TableCell>
            {isBasket &&<TableCell align="center"></TableCell>}
=======
            <TableCell align="right">Subtotal</TableCell>
            {isBasket && <TableCell align="right"></TableCell>}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
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
              <TableCell align="center">{currencyFormat(item.price)}</TableCell>
              <TableCell align="center">
                {isBasket &&(<LoadingButton
                  loading={
                    status === "pendingRemoveItem" + item.productId + "rem"
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
                </LoadingButton>)}
                {item.quantity}
               {isBasket &&(<LoadingButton
                  loading={status === "pendingAddItem" + item.productId}
                  onClick={() =>
                    dispatch(addBasketItemAsync({ productId: item.productId }))
                  }
                  color="error"
                >
                  <Add />
                </LoadingButton>)}
              </TableCell>
              <TableCell align="right">
                {currencyFormat(item.price * item.quantity)}
              </TableCell>
              {isBasket &&(<TableCell align="right">
               <LoadingButton
                  loading={
                    status === "pendingRemoveItem" + item.productId + "del"
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
<<<<<<< HEAD
              </TableCell>
              )}

=======
              </TableCell>)}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
