import { Grid } from '@mui/material'
import { Box, positions } from '@mui/system'
import React from 'react'
import Fon from '../img/booksFon.jpg'

const HomePage = () => {
  return (
    <Box >
    <Grid >
      <h1 style={{
           maxWidth: '700px',
           position: 'absolute',
           top: '40%',
           left: '8%',
           fontSize: '60px',
           color: 'black',
      }}>Кто много читает тот много знает!</h1>
      
      <img src={Fon} alt="" style={{
        width:'100%', 
        height:'100%',
        position: 'realtive'
        }} />
  </Grid>
</Box>
  )
}

export default HomePage