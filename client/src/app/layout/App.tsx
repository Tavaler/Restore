import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
<<<<<<< HEAD
import { useCallback, useEffect, useState } from "react";
=======
import React, { useCallback, useEffect, useState } from "react";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetail from "../../features/catalog/ProductDetail";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import NotFound from "../errors/NotFound";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServerError from "../errors/ServerError";
<<<<<<< HEAD
import BasketPage from "../../features/basket/BasketPage";
import LoadingComponent from "./LoadingComponent";
import CheckoutPage from "../../features/checkout/checkoutPage";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
=======
// import { useStoreContext } from "../context/StoreContext";
import BasketPage from "../../features/basket/BasketPage";
import LoadingComponent from "./LoadingComponent";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { fetchBasketAsync, setBasket } from "../../features/basket/basketSlice";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
import { fetchCurrentUser } from "../../features/account/accountSlice";
import { PrivateLogin, PrivateRoute } from "./PrivateRoute";
import OrderPage from "../../features/orders/OrderPage";
import CheckoutWrapper from "../../features/checkout/CheckoutWrapper";

export default function ButtonAppBar() {
<<<<<<< HEAD
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  
=======
  // const { setBasket } = useStoreContext(); //ควบคุมสเตทด้วย React context to Centralize

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { fullscreen } = useAppSelector((state) => state.screen);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  
  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);
<<<<<<< HEAD
  
=======
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2

  const [mode, setMode] = useState(false);
  const displayMode = mode ? "dark" : "light";

  const darkTheme = createTheme({
    palette: {
      mode: displayMode,
    },
  });

  const handleMode = () => setMode(!mode);

  if (loading) return <LoadingComponent message="Initilize App....." />;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={2000}
        />
        <CssBaseline />
        <Header handleMode={handleMode} />
<<<<<<< HEAD
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetail />} />
            <Route path="/server-error" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/basket" element={<BasketPage />} />
            
            <Route element={<PrivateRoute />}>
              <Route path="/checkout" element={<CheckoutWrapper />} />
              <Route path="/orders" element={<OrderPage/>}/>
            </Route>

            {/* <Route path="/login" element={<Login />} /> */}

            <Route
              path="/login"
              element={
                <PrivateLogin>
                  <Login />
                </PrivateLogin>
              }
            />

            <Route path="/register" element={<Register />} />

            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          </Routes>
        </Container>
=======
        {fullscreen ? (
          <>{mainroute}</>
        ) : (
          <Container sx={{ marginTop: 2 }}>{mainroute}</Container>
        )}
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
      </ThemeProvider>
    </>
  );
}

const mainroute = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/catalog/:id" element={<ProductDetail />} />
    <Route path="/server-error" element={<ServerError />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/basket" element={<BasketPage />} />
    <Route path="/register" element={<Register />} />

    <Route
      path="/login"
      element={
        <PrivateLogin>
          <Login />
        </PrivateLogin>
      }
    />
    <Route element={<PrivateRoute />}>
      <Route path="/checkout" element={<CheckoutWrapper />} />
      <Route path="/order" element={<OrderPage />} />
    </Route>
  </Routes>
);
