import * as React from "react";
import Header from "./Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/system";
import Catalog from "../../features/catalog/Catalog";
import ProductList from "../../features/catalog/ProductList";



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
          <Catalog />
          {/* <ProductList /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}
