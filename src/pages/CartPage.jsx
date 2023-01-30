import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Cart from '../Cart/Cart'

const CartPage = () => {
  return (
    <Box  sx={{padding: '6rem'}}>
    <Grid  spacing={3}>
    <Cart />
    </Grid>
  </Box >
  )
}

export default CartPage