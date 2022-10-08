import { Grid, Paper } from "@mui/material";
<<<<<<< HEAD
import { useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
import AppPagination from "../../App/components/AppPagination";
import CheckboxButtons from "../../App/components/CheckboxButtons";
import RadioButtonGroup from "../../App/components/RadioButtonGroup";
import LoadingComponent from "../../App/layout/LoadingComponent";
<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
  setPageNumber,
  setProductParams,
} from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
 
=======
import { useAppSelector, useAppDispatch } from "../../App/store/configureStore";
import {
  productSelectors,
  fetchProductsAsync,
  fetchFilters,
  setProductParams,
  setPageNumber,
} from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to low" },
  { value: "price", label: "Price - Low to high" },
];
<<<<<<< HEAD
 
export default function Catalog() {
=======

const Catalog = () => {
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  const products = useAppSelector(productSelectors.selectAll);
  const {
    productsLoaded,
    status,
    filtersLoaded,
    brands,
    types,
    productParams,
    metaData,
  } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
<<<<<<< HEAD
 
  //แยก useEffect เพื่อป้องกันการโหลดซ้ำซ้อนจาก [] (ตรวจสอบจาก Redux dev tools)
  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);
 
  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);
 
  // if (status.includes("pending"))
  //   return <LoadingComponent message="Loading Products..." />;
  
  if (!filtersLoaded) return <LoadingComponent message="Loading Products..." />; 
=======

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);

  if (!filtersLoaded) return <LoadingComponent message="Loading Products..." />;

>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <ProductSearch />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <RadioButtonGroup
            selectedValue={productParams.orderBy}
            options={sortOptions}
            onChange={(e) =>
              dispatch(setProductParams({ orderBy: e.target.value }))
            }
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <CheckboxButtons
            items={brands}
            checked={productParams.brands}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ brands: items }))
            }
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <CheckboxButtons
            items={types}
            checked={productParams.types}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ types: items }))
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={3} />
<<<<<<< HEAD
      <Grid item xs={9} sx={{ mt: 1 }}>
        {metaData && (
          <AppPagination
            metaData={metaData}
            onPageChange={(page: number) =>
              dispatch(setPageNumber({ pageNumber: page }))
            }
          />
        )}
=======
      <Grid item xs={9} sx={{ mb: 2 }}>
        <h1>
          {metaData && (
            <AppPagination
              metaData={metaData}
              onPageChange={(page: number) =>
                dispatch(setPageNumber({ pageNumber: page }))
              }
            />
          )}
        </h1>
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
      </Grid>
    </Grid>
  );
}
