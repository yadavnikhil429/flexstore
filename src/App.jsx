

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import ProductList from './pages/productlist'
import Product from './pages/product'
import Cart from './pages/cart'
import NotFound from './pages/notfound'
import NavBar from './layouts/navbar'
import Footer from './layouts/footer'
import AboutUs from './pages/aboutus'





function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
       
        <Route path='product/:id' element={<Product />} />
        <Route path='aboutus' element={<AboutUs/>} />
        <Route path='cart' element={<Cart />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      </Routes>
      
    </>
  )
}

export default App
