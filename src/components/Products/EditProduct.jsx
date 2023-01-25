import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';

const EditProduct = () => {
  const { updateProduct, getOneProduct, productsDetails } = useProduct();
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    picture: '',
    name: '',
    descr: 0,
    author: '',
    price: '',
    type: '',

  });


  function handleInp(e) {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  const {id} = useParams()

  useEffect(() => {
    getOneProduct(id)
  }, [])

  useEffect(() => {
    setProduct(productsDetails)
  }, [productsDetails])

  console.log(product);

  return (
    <>
      <Box sx={{ width: '60vw', margin: '10vh auto' }}>
        <Typography align='center' variant='h4' element='h2'>
          EDIT PAGE
        </Typography>
        <TextField
          value={product.picture || ''}
          onChange={handleInp}
          fullWidth
          name='picture'
          id='outlined-basic'
          label='picture'
          variant='outlined'
        />
        <TextField
          value={product.name || ''}
          onChange={handleInp}
          fullWidth
          name='name'
          id='outlined-basic'
          label='name'
          variant='outlined'
        />
        <TextField
          value={product.descr || ''}
          onChange={handleInp}
          fullWidth
          name='descr'
          id='outlined-basic'
          label='description'
          variant='outlined'
        />
        <TextField
          value={product.author || ''}
          onChange={handleInp}
          fullWidth
          name='author'
          id='outlined-basic'
          label='author'
          variant='outlined'
        />
        <TextField
          value={product.price || ''}
          onChange={handleInp}
          fullWidth
          name='price'
          id='outlined-basic'
          label='price'
          variant='outlined'
        />
        <TextField
          value={product.type || ''}
          onChange={handleInp}
          fullWidth
          name='type'
          id='outlined-basic'
          label='type'
          variant='outlined'
        />
        <Button
          onClick={() =>{ updateProduct(product); navigate('/products')}}
          variant='outlined'
          fullWidth
          size='large'
        >
          UPDATE PRODUCT
        </Button>
      </Box>
    </>
  )
}

export default EditProduct