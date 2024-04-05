import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import WishList from '../pages/WishList'
import Cart from '../pages/Cart'
import About from '../pages/About'
import SuccessfulCheckout from '../pages/SuccessfulCheckout'
import ProductDetails from '../pages/ProductDetails'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import Admin from '../admin/Admin'
import BlogList from '../admin/BlogList'
import EditBlog from '../admin/EditBlog'
import Addblog from '../admin/AddBlog'
import BlogDetails from '../pages/BlogDetails'
import Blog from '../pages/Blog'
import ErrorPage from '../pages/ErrorPage'
import { MyContext } from '../context/GlobalContext'



const AppRouter = () => {
  const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]=useContext(MyContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='chekoutsuccess' element={<SuccessfulCheckout />} />        
        <Route path='/admin' element={isAdminIn? <Admin/> : <ErrorPage />} />
        <Route path='/bloglist' element={<BlogList/>} />
        <Route path='/addblog' element={<Addblog />} />
        <Route path='/post/:id' element={<BlogDetails />} />
        <Route path='/editBlog/:id' element={<EditBlog />} /> 
        <Route path='/details/:id' element={<ProductDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
