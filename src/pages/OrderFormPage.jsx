import { Box, Grid } from '@mui/material'
import React from 'react'
import OrderForm from '../components/Products/OrderForm'

const OrderFormPage = () => {
  return (
    <Box  sx={{padding: '7rem'}}>
      <Grid spacing={3}>
      <OrderForm />
      </Grid>
    </Box >
  )
}

export default OrderFormPage