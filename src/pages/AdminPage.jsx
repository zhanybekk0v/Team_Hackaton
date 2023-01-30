import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddProduct from '../components/Products/AddProduct'

const AdminPage = () => {
  return (
    <Box  sx={{padding: '3rem'}}>
    <Grid  spacing={3}>
    <AddProduct/>
    </Grid>
  </Box >
  )
}

export default AdminPage