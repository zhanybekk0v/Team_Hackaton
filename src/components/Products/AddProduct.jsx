import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    descr: '',
    price: 0,
    picture: '',
    type: '',
  });

  // const { addProduct } = useProducts();

  const handleInp = (e) => {
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
  };


  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <Typography align='center' variant='h4' element='h2'>
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInp}
        fullWidth
        name='picture'
        id='outlined-basic'
        label='picture'
        variant='outlined'
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='name'
        id='outlined-basic'
        label='name'
        variant='outlined'
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='descr'
        id='outlined-basic'
        label='description'
        variant='outlined'
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='descr'
        id='outlined-basic'
        label='Author'
        variant='outlined'
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='price'
        id='outlined-basic'
        label='price'
        variant='outlined'
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='type'
        id='outlined-basic'
        label='type'
        variant='outlined'
      />
      <Button
        // onClick={() => addProduct(product)}
        variant='outlined'
        fullWidth
        size='large'
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
