import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../contexts/ProductContextProvider'
import ProductDeteils from './ProductDeteils'

const ProductDetailsList = () => {
    const {getOneProduct, productsDetails} = useProduct()
    const [product, setProduct] =useState([{
        picture: '',
        name: '',
        descr: '',
        auhor: '',
        price: 0,
        type: ''
     }])
    


  const {id} = useParams()

    useEffect(()=> {
        getOneProduct(id)
    },[])

useEffect(() => {
    setProduct(productsDetails)
},[productsDetails])

console.log(product);

  return (
    <>
        <Box sx={{display: 'flex', justifyContent: 'center'}} >
            <ProductDeteils product={product} />
        </Box>
    </>
  )
}

export default ProductDetailsList