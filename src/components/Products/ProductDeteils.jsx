import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './ProductDetails.css'
import { useNavigate } from 'react-router-dom';

const ProductDeteils = ({product}) => {
    const navigate = useNavigate()
  return (
    <div>

   
    <div className='booksBtn'>
    <button onClick={() => navigate('/products')} className='books_btn'>
    Назад
        </button>
    </div>
    <div className='content'>
        
   <div className="book_img">
        <img className="books_img" src={product.picture} />
        <h2 className="books_author"> Автор этого бессцеллера: {product.author}</h2>

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
                <ShoppingCartCheckoutIcon size="large" className='books_cart'/>
            </div>
       
        </div>
        </div>
</div>
  )
}

export default ProductDeteils


