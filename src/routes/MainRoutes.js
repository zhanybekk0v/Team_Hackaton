import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage'
import AdminPage from '../pages/AdminPage'
import AuthPage from '../pages/AuthPage'
import CartPage from '../pages/CartPage'
import EditProductPage from '../pages/EditProductPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import OrderFormPage from '../pages/OrderFormPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductsPage from '../pages/ProductsPage'

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePage />,
      id: 1
    },
    {
      link: '/products',
      element: <ProductsPage />,
      id: 2
    },
    {
      link: '/cart',
      element: <CartPage />,
      id: 3
    },
    {
      link: '/edit/:id',
      element: <EditProductPage />,
      id: 4
    },
    {
      link: '/admin',
      element: <AdminPage />,
      id: 5
    },
    {
      link: '*',
      element: <NotFoundPage />,
      id: 6
    },
    {
      link: '/auth',
      element: <AuthPage />,
      id: 7
    },
    {
      link: '/about',
      element: <AboutUsPage />,
      id: 8
    },
    {
      link: '/details/:id',
      element: <ProductDetailsPage />,
      id: 9
    },
    {
      link: '/orderForm',
      element: <OrderFormPage />,
      id: 10
    }
  ]
  return (
    <>
    <Routes>
    {PUBLIC_ROUTES.map((item) => (<Route path={item.link} element={item.element} key={item.id} />))}
    </Routes>

    </>
  )
}

export default MainRoutes