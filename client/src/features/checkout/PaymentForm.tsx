<<<<<<< HEAD
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AppTextInput from '../../App/components/AppTextInput';
import { useFormContext } from 'react-hook-form';
import { StripeInput } from './StripeInput';
import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
import { StripeElementType } from '@stripe/stripe-js';
=======
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../App/components/AppTextInput";
import { StripeInput } from "./StripeInput";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { StripeElementType } from "@stripe/stripe-js";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2

interface Props {
  cardState: { elementError: { [key in StripeElementType]?: string } };
  onCardInputChange: (event: any) => void;
}
<<<<<<< HEAD

export default function PaymentForm({cardState,onCardInputChange}:Props) {
=======
export default function PaymentForm({ cardState, onCardInputChange }: Props) {
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  const { control } = useFormContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AppTextInput
            name="nameOnCard"
            label="Name on card"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={onCardInputChange}
            error={!!cardState.elementError.cardNumber}
            helperText={cardState.elementError.cardNumber}
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
<<<<<<< HEAD
            variant="standard"
=======
            variant="outlined"
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: { component: CardNumberElement },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
<<<<<<< HEAD

            onChange={onCardInputChange}
            error={!!cardState.elementError.cardExpiry}
            helperText={cardState.elementError.cardExpiry}

=======
            onChange={onCardInputChange}
            error={!!cardState.elementError.cardExpiry}
            helperText={cardState.elementError.cardExpiry}
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
<<<<<<< HEAD
            variant="standard"
=======
            variant="outlined"
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: { component: CardExpiryElement },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
<<<<<<< HEAD

            onChange={onCardInputChange}
            error={!!cardState.elementError.cardCvc}
            helperText={cardState.elementError.cardCvc}

            id="cvv"
            label="CVV"
            // helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
=======
            onChange={onCardInputChange}
            error={!!cardState.elementError.cardCvc}
            helperText={cardState.elementError.cardCvc}
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="outlined"
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: { component: CardCvcElement },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
