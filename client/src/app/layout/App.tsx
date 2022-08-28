import * as React from "react";
import Header from "./Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/system";
import Catalog from "../../features/catalog/Catalog";
import ProductList from "../../features/catalog/ProductList";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import { ContactPage } from "@mui/icons-material";



export default function App() {
  const [mode, setMode] = useState(false)
  const displayMode = mode ? "dark" : "light";

  const darkTheme = createTheme({
    palette: {
      mode: displayMode
    },
  });
  
  const headlemode =()=>setMode(!mode)
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Header headleMode={headlemode}/>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {/* <Catalog /> */}
          {/* <ProductList /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}
