import { AccessTimeTwoTone } from '@mui/icons-material'
import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'
import { ACTIONS } from '../helper/consts'

export const productContext = createContext()

export const useProduct = () => {
  return useContext(productContext)
}

const INIT_STATE = {
  products: [],
  productsDetails: {}
}
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload }
    case ACTIONS.GET_PRODUCTS_DETAILS:
      return { ...state, productsDetails: action.payload }

    default:
      return state
  }
}

const ProductContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, INIT_STATE)

//? GET запрос
async function getProducts() {
  const {data} = await axios
}
  const values = {

  }
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  )
}

export default ProductContextProvider