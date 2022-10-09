import { useEffect } from "react";
import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { AppDropzone } from "../../App/components/AppDropzone";
import AppSelectList from "../../App/components/AppSelectList";
import AppTextInput from "../../App/components/AppTextInput";
import useProducts from "../../App/hooks/useProducts";
import { Product } from "../../App/models/Product";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./productValidation";
import { useAppDispatch } from "../../App/store/configureStore";
import agent from "../../App/api/agent";
import { setProduct } from "../catalog/catalogSlice";
import { LoadingButton } from "@mui/lab";
 
interface Props {
    product?: Product;
    cancelEdit: () => void;
  }
   
  export default function ProductForm({ product, cancelEdit }: Props) {
    const {
      control,
      reset,
      handleSubmit,
      watch,
      formState: { isDirty, isSubmitting },
    } = useForm({
      resolver: yupResolver(validationSchema),
    });
    const { brands, types } = useProducts();
    const watchFile = watch("file", null);
    const dispatch = useAppDispatch();
   
    useEffect(() => {
      if (product && !watchFile && !isDirty) reset(product);  
      return () => {
        if (watchFile) URL.revokeObjectURL(watchFile.preview); //ลบ URL ของภาพ
      };
    }, [product, reset, watchFile, isDirty]);
   
    async function handleSubmitData(data: FieldValues) {
      try {
        let response: Product;
        if (product) {
          response = await agent.Admin.updateProduct(data);
        } else {
          response = await agent.Admin.createProduct(data);
        }
        dispatch(setProduct(response));
        cancelEdit();
      } catch (error) {
        console.log(error);
      }
    }
   
    return (
      <Box component={Paper} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Product Details
        </Typography>
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <AppTextInput control={control} name="name" label="Product name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppSelectList
                control={control}
                items={brands}
                name="brand"
                label="Brand"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppSelectList
                control={control}
                items={types}
                name="type"
                label="Type"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppTextInput
                control={control}
                type="number"
                name="price"
                label="Price"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppTextInput
                control={control}
                type="number"
                name="quantityInStock"
                label="Quantity in Stock"
              />
            </Grid>
            <Grid item xs={12}>
              <AppTextInput
                multiline={true}
                rows={4}
                control={control}
                name="description"
                label="Description"
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <AppDropzone control={control} name="file" />
                {watchFile ? (
                  <img
                    src={watchFile.preview}
                    alt="preview"
                    style={{ maxHeight: 200 }}
                  />
                ) : (
                  <img
                    src={product?.pictureUrl}
                    alt={product?.name}
                    style={{ maxHeight: 200 }}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
            <Button variant="contained" color="inherit" onClick={cancelEdit}>
              Cancel
            </Button>
            <LoadingButton
              loading={isSubmitting}
              variant="contained"
              color="success"
              type="submit"
            >
              Submit
            </LoadingButton>
          </Box>
        </form>
      </Box>
    );
  }
  
