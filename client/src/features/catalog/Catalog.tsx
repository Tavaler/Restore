import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/api/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


  // useEffect(() => {
  //   fetch("http://localhost:5000/api/Product")
  //   .then((response) => response.json())
  //   .then((data)=>setProducts(data))
  //   .catch((error) => console.error(error))
    
  // }, []);
  
  // const data = Array.from(Array(100).keys());

  // const CardProduct = () => (
  //   <Card sx={{ maxWidth: "100%" }}>
  //     <CardMedia
  //       component="img"
  //       height="140"
  //       image={`http://placeimg.com/640/480/animals?${Math.random()}`}
  //       alt="green iguana"
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div">
  //         Lizard
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         Lizards are a widespread group of squamate reptiles, with over 6,000
  //         species, ranging across all continents except Antarctica
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small">Share</Button>
  //       <Button size="small">Learn More</Button>
  //     </CardActions>
  //   </Card>
  // );

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
