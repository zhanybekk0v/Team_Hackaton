import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useProduct } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {CardContent, IconButton, Typography } from '@mui/material'
import { useCart } from '../../contexts/cartContextProvider';

export default function ProductCard({item}){
  const { deleteProduct } = useProduct();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();
  return (<Card sx={{ width: "25%", margin: "1rem" }}>
  <CardMedia
    sx={{ height: 200 }}
    image={item.picture}
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {item.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {item.descr}
    </Typography>
    <Typography gutterBottom variant="h5" component="div">
      {item.Author}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      $ {item.price}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {item.type}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {item.Age}
    </Typography>
  </CardContent>
  <CardActions sx={{ display: "flex", flexDirection: "column" }}>
    <Button size="small" onClick={() => deleteProduct(item.id)}>
      Delete
    </Button>
    <Button size="small">Details</Button>
    <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
      Edit
    </Button>

    <IconButton onClick={() => addProductToCart(item)}>
      <ShoppingCartIcon
        color={checkProductInCart(item.id) ? "primary" : ""}
      />
    </IconButton>
  </CardActions>
</Card>
  )
}
