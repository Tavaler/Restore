import {useEffect} from "react";
import LoadingComponent from "../../App/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll)
  const {productsLoaded,status} = useAppSelector(state=>state.catalog)
  const dispatch = useAppDispatch()
 
  useEffect(() => {
    if(!productsLoaded) dispatch(fetchProductsAsync())
  }, [productsLoaded,dispatch]);


  if(status.includes('pending')) return <LoadingComponent message="Loading Products..."/>

  return (
    <>
    <ProductList products={products}/>
    </>
  );
};

export default Catalog;
