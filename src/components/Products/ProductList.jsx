import { Box, Grid, Pagination } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useProduct } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  //pagination

  const [page, setPage] = useState(1)
  const itemsPerPage = 3

  const count = Math.ceil(products.length / itemsPerPage)

  const handleChange = (e,p) =>{
    setPage(p)
  };

  function currentData() {
    const begin = (page-1) * itemsPerPage;
    const end = begin +  itemsPerPage;
    return products.slice(begin,end)
  }
  return (
    <>
    <Grid item md={9}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        mb: '4rem',
        marginTop: '5rem'
      }}>
        {currentData().map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Pagination onChange={handleChange} count={count} page={page} variant="outlined" shape="rounded" />
    </Grid>
      
    </>
  )
}

export default ProductList