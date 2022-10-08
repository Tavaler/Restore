import { Grid, Button, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
<<<<<<< HEAD
import {Link} from "react-router-dom"
=======
import { Link } from "react-router-dom";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
import { useAppSelector } from "../../App/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
<<<<<<< HEAD

  const { basket } = useAppSelector((state) => state.basket);

  if (!basket)
  return <Typography variant="h3">Your basket is empty</Typography>;
  
  return (
    <>
    <BasketTable items={basket?.items} isBasket={true} />

=======
  const { basket } = useAppSelector((state) => state.basket);

  if (!basket)
    return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <>
      <BasketTable items={basket.items} isBasket={true} />
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
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
