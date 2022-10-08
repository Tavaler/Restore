import { Grid, Button, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
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
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
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
