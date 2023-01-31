import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './ProductDetails.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';

const ProductDeteils = ({ product }) => {
  const {addProductToCart,checkProductInCart } = useCart()
  const navigate = useNavigate()
  return (
    <div>


      <div className='booksBtn'>
        <button onClick={() => navigate('/products')} className='books_btn'>
          <ArrowBackIosNewIcon />
        </button>
      </div>
      <div className='content'>

        <div className="book_details">
          <img className="books_img" src={product.picture} />
          <h2 className="books__author"> Автор этого бессцеллера: <span>{product.author}</span></h2><br />
          <p className='books__genre'>Жанр: <span>{product.type}</span> </p>
        </div>
        <div className='books_info' >
          <Typography className='books_about'>
            <h2 className="books_title">{product.name}</h2>
          </Typography>
          <div className='books_descr'>
            <p >{product.descr}</p>
          </div>
          <div className='books_buy'>
            <span className="books_price">{product.price}P</span>
          <IconButton onClick={() => addProductToCart(product)}>
             <ShoppingCartCheckoutIcon size="large" className='books_cart' color={checkProductInCart(product.id) ? 'primary' : ''}/> </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDeteils


