import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductList from '../components/Products/ProductList'
import SideBar from '../components/Products/SideBar'

const ProductsPage = () => {
  return (
    <Box  sx={{padding: '6rem'}}>
      <Grid  spacing={3} >
      <SideBar/>
      <ProductList />
      </Grid>
    </Box >
  )
}

export default ProductsPage