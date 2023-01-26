import * as React from 'react';
import { useProduct } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

export default function ProductCard({ item }) {
  const { deleteProduct } = useProduct()
  const navigate = useNavigate()

  return (
    <div className="book">
      {/* <NavLink to={`/${.id}`} > */}
      <div className="book_img">
        <img className="books_img" src={item.picture} />
      </div>
      {/* </NavLink> */}

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
          <button onClick={() => deleteProduct(item.id)}  className="delete">
           Delete
          </button>
          <button onClick={() => navigate(`/edit/${item.id}`) } className="edit">
           Edit
          </button>
        </div>
    </div>
  );
}