import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";


export default function Catalog() {
  const data = Array.from(Array(100).keys());

  const CardProduct = () => (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={`http://placeimg.com/640/480/animals?${Math.random()}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data.map((_, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <CardProduct />
        </Grid>
      ))}
    </Grid>
  );
}
