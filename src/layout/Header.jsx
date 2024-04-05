// guitarshopapp123

import React, { useContext,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// icons
import { MdOutlineDarkMode, MdOutlineShoppingCart, MdLightMode,MdDarkMode, MdOutlineLogout  } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
 


// icons

import BurgerMenu from '../components/BurgerMenu';
import { MyContext } from '../context/GlobalContext';
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]=useContext(MyContext)
  const {totalWishlistItems}=useWishlist()
  const {totalItems}=useCart();
  const navigate=useNavigate();
  const {t}=useTranslation()
  
  const userInLocal=JSON.parse(localStorage.getItem('users')) || ''
  // const localIsLoggedIn=localStorage.getItem('isloggedin') || ''
  // const localIsAdminIn=localStorage.getItem('isAdminIn')
  const userNameFromLocal=localStorage.getItem('userName')

  const logOut=()=>{
    
    setIsLoggedIn(false)
    setIsAdminIn(false)
    localStorage.removeItem('isloggedin')
    localStorage.removeItem('isAdminIn')
}

  // useEffect(()=>{
  //   localIsLoggedIn=='true'?setIsLoggedIn(true):setIsLoggedIn(false)
  //   localIsAdminIn=='true'?setIsAdminIn(true):setIsAdminIn(false)
  // })
  

  return (
    <>
      <header className='bg-color-1 text-light' >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row header d-flex justify-content-around align-items-center">

                <div className="col-lg-1 col-4 h-100 p-0">
                  <img 
                  src='//images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg'
                  className='w-100 h-100 logo d-lg-block d-none ms-3 shadow'
                  onClick={(()=>navigate('/'))}
                  />

                  <div className={`row d-lg-none d-flex ${isLoggedIn?'justify-content-center':'justify-content-start'} p-0 h-100`}>
                    <div className="col-6 p-0 h-100 d-flex align-items-center">
                      <BurgerMenu />
                    </div>

                    
                      <div className="col-6 d-flex align-items-center"></div>
                  </div>

                </div>

                <div className="col-lg-6 col-4 d-md-flex align-items-md-center h-100">                  
                      <nav className='d-none d-lg-flex justify-content-around align-items-center w-100 fs-4'>
                        <Link to={'/'} className='nav-link' >{t("Home")}</Link>
                        <Link to={'/shop'} className='nav-link'>{t("Shop")}</Link>
                        <Link to={'/about'} className='nav-link' >{t("About")}</Link>
                        <Link to={'/contact'} className='nav-link' >{t("Contact")}</Link>
                      </nav>   
                 
                  <img 
                  src='//images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg'
                  className='w-100 h-100 logo d-lg-none d-block'
                  />
                      
                </div>

                <div className="col-4 d-flex align-items-center px-lg-5">
                  <ul className='list-unstyled d-flex justify-content-around align-items-center w-100 m-0 px-lg-5 p-0'>
                    
                    <li>
  
                      <button 
                      onClick={changeTheme} 
                      className='h-75 w-100 border-0 bg-transparent d-flex justify-content-center align-items-center theme-btn'                                 
                      >
                      {
                      theme=='bg-light'?< MdDarkMode size={30} color='white'/>:<MdLightMode size={30} color='white'/>
                      }
                      </button>
                    </li>
                    
                    <li className='d-md-block d-none'>
                     
                      <Link to={'/wishlist'} className='wishlist nav-link pe-sm-0 pe-1'>
                                {theme=='bg-light'?<FaRegHeart size={27} color='white'/>:
                                <FaRegHeart size={27}/>
                                }
                                {totalWishlistItems?<span>{totalWishlistItems}</span>:null}
                            </Link>
                    </li>
                    
                    <li className='d-md-block d-none'>
                  
                      <Link className='nav-link cart' to='/cart'>
                                {theme=='bg-light'?<MdOutlineShoppingCart size={30} color='white'/>
                                :<MdOutlineShoppingCart size={30}/>                                
                            }
                            {totalItems? <span>{totalItems}</span> : null}
                            </Link>
                      </li>
                    
                  </ul>
                </div>

                <div className="col-1 d-none d-lg-flex justify-content-center align-items-center">

                  {
                    isLoggedIn?
                    <>
                    <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      {userNameFromLocal}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li><button onClick={()=>logOut()} className='btn btn-danger w-100'>< MdOutlineLogout/>{t("LogOut")}</button></li>
                      {
                            isAdminIn?
                            <>
                            <li className='my-2'><button className='btn btn-warning w-100' onClick={()=>navigate('/admin')}>Admin</button></li>
                            </>
                            :
                            ''
                          }

                    </ul>
                  </div>
                    </>:
                    <button className='btn btn-light w-100' onClick={()=>navigate('/login')}>{t("Sign-In")}</button>
                  }
            

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
