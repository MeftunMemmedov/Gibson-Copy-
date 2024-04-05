import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//icons
import { IoStar } from "react-icons/io5";
import { MyContext } from '../context/GlobalContext';
import { LiaGhostSolid } from 'react-icons/lia';
import WishListBtn from './WishListBtn';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';


const SingleProduct = ({item}) => {
    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme]=useContext(MyContext)
    const {addItem, inCart} = useCart()
    const navigate = useNavigate()
    const {t}=useTranslation()
  
    return (
    <>
    <div className="col-lg-3 col-6 product-box my-4 ">
        <div className="row ">

            <div className="col-11 m-auto ">
                <div className="row">
                
                    <div className={`col-12 ${theme=='bg-light'?'product-img-box-light':'product-img-box-dark'} border d-flex justify-content-center position-relative`}>
                        <WishListBtn item={item}/>
                        <img src={item.image_1}  className={`h-100 product-img ${item.name.replace(/\s/g, '')}`}/>
                    </div>

                    <div className="col-12 text-start product-info-box">
                        <div className="row h-100">
                            <div className="col-12 h-25 my-1">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-3 h-100">
                                        <img 
                                        src='//images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg'
                                        className='w-100 h-100 product-logo'
                                        />
                                    </div>
                                    <div className="col-3 h-100 p-0">
                                        <span className='d-flex align-items-center'><IoStar color='gold' className='product-rating-icon'/><h6 className='mt-2 fs-4'>{item.rating}</h6></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-50">
                                <h5 className='my-2'>
                                    <Link to={`/details/${item.id}`} className='nav-link'>{item.name}</Link>
                                </h5>
                            </div>
                            <div className="col-12 h-25">
                                <div className="row">
                                    <div className="col-md-6 col-12"><h5 className='mt-1'>$ {item.price}</h5></div>
                                    <div className="col-md-6 col-12"><button className={`${theme=='bg-light'?'add-to-cart-btn-light':'add-to-cart-btn-dark'} w-100`} onClick={()=>addItem(item)}>{t("Add to Cart")}</button></div>
                                </div>
                                
                                
                            </div>
                        </div>                                                
                    </div>
                </div>
            </div>
                                    
        </div>
    </div>
    </>
  )
}

export default SingleProduct
