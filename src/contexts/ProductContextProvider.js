import { AccessTimeTwoTone } from '@mui/icons-material'
import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'
import { ACTIONS, API } from '../helper/consts'

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
    const { data } = await axios.get(API)

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  }

  //? POST запрос

  async function addProduct(newProduct) {
    await axios.post(API, newProduct)
  }

  //? DELETE запрос

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts()
  }
  //? get one product details

  async function getOneProduct(id) {
    const { data } = await axios.get(`${API}/${id}`)
    dispatch({ type: ACTIONS.GET_PRODUCTS_DETAILS, payload: data })
  }

  //? UPDATE product
  async function updateProduct(newProduct) {
    await axios.patch(`${API}/${newProduct.id}`, newProduct)
  }
  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    updateProduct,
    productsDetails: state.productsDetails
  }
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  )
}

export default ProductContextProvider