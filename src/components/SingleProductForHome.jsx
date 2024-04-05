import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//icons
import { IoStar } from "react-icons/io5";
import { MyContext } from '../context/GlobalContext';
import { LiaGhostSolid } from 'react-icons/lia';
import WishListBtn from './WishListBtn';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';


const SingleProductForHome = ({item}) => {
    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme]=useContext(MyContext)
    const {addItem, inCart} = useCart()
    const navigate = useNavigate()
    const {t}=useTranslation()
  return (
    <>
      <div className='product-box-home p-1 '>
        <div className="w-100 product-box-home-1-1 d-flex justify-content-center align-items-center overflow-hidden position-relative">
            <div className='w-100 h-25 add-to-wishlist-box-home position-absolute'><WishListBtn item={item}/></div>
            <div className='w-100 h-25 add-to-cart-box-home position-absolute'>
            <button className=' h-100 w-100' onClick={()=>addItem(item)}>{t("Add to Cart")}</button>
            </div>
            <img src={item.image_1} className=' h-100'/>
        </div>
        
        <div className='w-100 product-info-box-home-1'>
            <h6 className='h-50'>
              <Link to={`/details/${item.id}`} className='nav-link  '>{item.name}</Link>
            </h6>
            <p className='h-25'>$ {item.price}</p>
        </div>
      </div>
    </>
  )
}

export default SingleProductForHome
