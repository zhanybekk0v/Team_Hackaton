import { Grid, Pagination } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useProduct } from '../../contexts/ProductContextProvider'
import ProductCard from './ProductCard'

const ProductList = () => {
  const {getProducts, products} = useProduct()
  const [searsch, setSearchParams] = useSearchParams()

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    getProducts()
    setPage(1)
  } , [setSearchParams])

  const [page, setPage] = useState(1)
  const itemsPerPage = 3

  const count = Math.ceil(products.length / itemsPerPage)

  const handleChange = (e, p) => {
    setPage(p)
  }

  function  currentData (){
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin , end)
  }

  return (
    <>
        <Grid sx={{padding: '3rem'}}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
          {currentData().map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Box>
        {products.length > 0 ? (
        <Pagination sx={{display:'flex' , justifyContent: 'center', color:'dark'}} onChange={handleChange} count={count} page={page} variant='outlined' snape='rounded' />
        ) : (null)}
      </Grid>
    </>
  
  )
}

export default ProductList