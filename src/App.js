
import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './Navbar/Navbar'
import './App.css'
import Footer from './Footer/Footer'


const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  )
}

export default App