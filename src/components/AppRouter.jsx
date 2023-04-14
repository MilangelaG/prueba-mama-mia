import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import PizzaInfoPage from '../pages/PizzaInfoPage.jsx'
import CarritoPage from '../pages/CarritoPage.jsx'

const AppRouter = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="Home" element={<HomePage />} />
        <Route path="pizza/:id" element={<PizzaInfoPage />} />
        <Route path="carrito" element={<CarritoPage />} /> 
        <Route path='*' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default AppRouter