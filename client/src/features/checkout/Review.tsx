<<<<<<< HEAD
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import BasketTable from '../basket/BasketTable';
import { useAppSelector } from '../../App/store/configureStore';
import BasketSummary from '../basket/BasketSummary';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  const { basket } = useAppSelector((state) => state.basket);

=======
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "../../App/store/configureStore";
import BasketTable from "../basket/BasketTable";
import BasketSummary from "../basket/BasketSummary";
export default function Review() {
  const { basket } = useAppSelector((state) => state.basket);
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {basket && <BasketTable items={basket.items} isBasket={false} />}
      <Grid container>
<<<<<<< HEAD
        <Grid item xs={6} sm={6}>
          
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          {/* <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography> */}
          <Grid container>
          <BasketSummary />
          </Grid>
=======
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
        </Grid>
      </Grid>
    </React.Fragment>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
