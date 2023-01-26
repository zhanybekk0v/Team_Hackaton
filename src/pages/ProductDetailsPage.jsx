import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductDetailsList from '../components/Products/ProductDetailsList'

const ProductDetailsPage = () => {
  return (
    <Box  sx={{margin: '5rem'}}>
        <Grid >
        <ProductDetailsList />
      </Grid>
    </Box>

  )
}

export default ProductDetailsPage