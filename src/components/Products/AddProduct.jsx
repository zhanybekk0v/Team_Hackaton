import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useProduct } from '../../contexts/ProductContextProvider';
import booksFon from '../../img/booksFon.jpg'

const AddProduct = () => {

  const [product, setProduct] = useState({
    picture: '',
    name: '',
    descr: 0,
    author: '',
    price: '',
    type: '',

  });

  const { addProduct } = useProduct();

  const handleInp = (e) => {
    if (e.target.name === 'price' ) {
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
  };


  return (
    <Box sx={{ width: '60vw', padding: '60px', textAlign: 'center'}}>
      <Typography sx={{marginBottom: 3}} align='center' variant='h4' element='h2'>
        ADMIN PAGE
      </Typography>
      <TextField
        sx={{marginBottom: 2, backgroundColor: '#f6e4de'}}
        onChange={handleInp}
        fullWidth
        name='picture'
        id='outlined-basic'
        label='Picture'
        variant='outlined'
      />
      <TextField
        sx={{marginBottom: 2, backgroundColor: '#f6e4de'}}
        onChange={handleInp}
        fullWidth
        name='name'
        id='outlined-basic'
        label='Name'
        variant='outlined'
      />
      <TextField
        sx={{marginBottom: 2, backgroundColor: '#f6e4de'}}
        onChange={handleInp}
        fullWidth
        name='descr'
        id='outlined-basic'
        label='Description'
        variant='outlined'
      />
      <TextField
        sx={{marginBottom: 2, backgroundColor: '#f6e4de'}}
        onChange={handleInp}
        fullWidth
        name='author'
        id='outlined-basic'
        label='Author'
        variant='outlined'
      />
      <TextField
        sx={{marginBottom: 2, backgroundColor: '#f6e4de'}}
        onChange={handleInp}
        fullWidth
        name='price'
        id='outlined-basic'
        label='Price'
        variant='outlined'
      />
      <TextField
        sx={{marginBottom: 2,  backgroundColor: '#f6e4de'}}
        onChange={handleInp}
        fullWidth
        name='type'
        id='outlined-basic'
        label='Type'
        variant='outlined'
      />
      <Button
        sx={{ width: 200 , color: 'brown', border: '2px solid brown',backgroundColor: '#f6e4de'}}
        onClick={() => addProduct(product)}
        variant='outlined'
        size='large'
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
