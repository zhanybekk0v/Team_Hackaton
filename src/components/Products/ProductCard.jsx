import * as React from 'react';
import { useProduct } from '../../contexts/ProductContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import './ProductCard.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useCart } from '../../contexts/CartContextProvider';
import { IconButton } from '@mui/material';
import { useAuth } from '../../contexts/AuthContextProvider';
import { ADMIN } from '../../helper/consts';

export default function ProductCard({ item }) {
  const { deleteProduct } = useProduct()
  const {addBookToCart,checkProductInCart} = useCart()
  const navigate = useNavigate()
  const {user} = useAuth()

  return (
    <div className="book">
      <Link to={`/details/${item.id}`} >
      <div className="book_img" link>
          <img className="books_img" src={item.picture} />
      </div>
      </Link>

      <div className="books_all_info">
        <div className="info_block_title">
          <p className="books_title">{item.name}</p>
          <p className="books_author">{item.author}</p>
        </div>
        <div className="book_price">
          <span className="books_price">{item.price}P</span>
        </div>
      </div>
        <div className="button">
          {user.email === ADMIN ? (
            <>
              <button onClick={() => deleteProduct(item.id)}  className="delete">
              Delete
             </button>
             <button onClick={() => navigate(`/edit/${item.id}`) } className="edit">
              Edit
             </button>
             </>
          ) : (
            null
          )}
        

          <IconButton onClick={() => addBookToCart(item)}> <LocalGroceryStoreIcon  size="large" color={checkProductInCart(item.id) ? 'primary' : 'black'} /></IconButton>
        </div>
    </div>
  );
}