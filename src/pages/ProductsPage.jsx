import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductList from '../components/Products/ProductList'

const ProductsPage = () => {
  return (
    <Box  sx={{marginTop: '5rem'}}>
      <Grid  spacing={3}>
      <ProductList />
      </Grid>
    </Box >
  )
}

export default ProductsPage