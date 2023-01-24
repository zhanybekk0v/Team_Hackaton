import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductList from '../components/Products/ProductList'

const Products = () => {
  return (
    <Box p={5} sx={{marginTop: '5rem'}}>
      Products Page 
      <Grid container spacing={5} >
        <ProductList/>
      </Grid>
    </Box>
  )
}

export default Products