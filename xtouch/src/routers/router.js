import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import AllProducts from '../pages/AllProducts'
import ProductDetails from '../pages/ProductDetails'
import Layout from '../components/layout'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='cart' element={<Cart/>} />
                <Route path='allproduct' element={<AllProducts/>}/>
                <Route path='productdetails' element={<ProductDetails/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router