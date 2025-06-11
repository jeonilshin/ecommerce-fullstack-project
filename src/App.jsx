import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import DiscountHeader from './components/DiscountHeader'
import Hero from './components/Hero'

const App = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      <div className='pt-[80px]'>
        {/* <DiscountHeader /> */}
        <Navbar />
        {isHomePage && <Hero />}


        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
