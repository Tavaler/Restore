


import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { LoadingButton } from '@mui/lab';

import { Product } from '../../app/models/Product';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  {Link}  from "react-router-dom";
import agent from '../../app/api/agent';


interface Props {
  product:Product;
}

export default function ProductCard({product}:Props ) {
  const [loading, setLoading] = useState(false);
  
  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }


  return (
    <>
      <Card sx={{ maxWidth: "100%" ,maxHeight: "100%"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {product.name.at(0)?.toLocaleUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.brand}
        subheader={product.name}
      />
      <CardMedia
        component="img"
        height="100%"
        sx={{backgroundSize: "contain",backgroundColor: "#CEFEFE"}}
        image={product.pictureUrl}
        // image={`http://placeimg.com/640/480/animals?${Math.random()}`}
        alt={product.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {(product.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>

      <LoadingButton
          loading={loading}
          onClick={() => handleAddItem(product.id)}
          size="small"
        >
          Add to cart
        </LoadingButton>
        
        <Button size="small" component={Link}  to={`/catalog/${product.id}`} >VIEW</Button>
      </CardActions>
    </Card>
    </>
  )
}
