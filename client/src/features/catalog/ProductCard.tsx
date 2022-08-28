import React from 'react'
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
  Typography,
} from "@mui/material";
import { Product } from '../../app/models/Product';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


interface Props {
  product:Product;
}

export default function ProductCard({product}:Props ) {
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
        height="140"
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
        <Button size="small">ADD TO CART</Button>
        <Button size="small">VIEW</Button>
      </CardActions>
    </Card>
    </>
  )
}
