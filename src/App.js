
import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './Navbar/Navbar'
import './App.css'


const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App