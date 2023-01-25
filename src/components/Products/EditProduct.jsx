import React from 'react'

const EditProduct = () => {
  return (
    <div>
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
        onClick={() => addProduct(product)}
        variant='outlined'
        fullWidth
        size='large'
      >
        CREATE PRODUCT
      </Button>
    </Box>
    </div>
  )
}

export default EditProduct