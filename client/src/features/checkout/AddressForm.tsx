import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../App/components/AppTextInput";
import AppCheckbox from "../../App/components/AppCheckbox";

export default function AddressForm() {
  const { control, formState } = useFormContext();

=======
import AppCheckbox from "../../App/components/AppCheckbox";
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../App/components/AppTextInput";

export default function AddressForm() {
  const { control , formState } = useFormContext();
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <AppTextInput control={control} name="fullName" label="Full name" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <AppTextInput
            control={control}
            name="address1"
            label="Address line 1"
          />
        </Grid>
        <Grid item xs={12}>
          <AppTextInput
            control={control}
            name="address2"
            label="Address line 2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="city" label="City" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="state" label="State" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="zip" label="Zipcode" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="country" label="Country" />
        </Grid>
<<<<<<< HEAD

        <Grid item xs={12}>
          <AppCheckbox
            disabled={!formState.isDirty} //ถ้าแก้ไขค่าในฟอร์มจะเปลี่ยนสถานะ
=======
        <Grid item xs={12}>
          <AppCheckbox
            disabled={!formState.isDirty}
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
            control={control}
            name="saveAddress"
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
