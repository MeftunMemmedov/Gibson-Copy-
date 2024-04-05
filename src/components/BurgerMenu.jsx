import React, { useContext } from 'react'
import { useState } from 'react';
import { Menu, SubMenu, Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/GlobalContext';
import { useTranslation } from 'react-i18next';
import { MdOutlineLogout  } from "react-icons/md";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]=useContext(MyContext)
    const {t}=useTranslation()
    const navigate=useNavigate()
    const userNameFromLocal=localStorage.getItem('userName')
    const logOut=()=>{
    
      setIsLoggedIn(false)
      setIsAdminIn(false)
      localStorage.removeItem('isloggedin')
      localStorage.removeItem('isAdminIn')
  }
  return (
    <>
       <button style={{marginLeft:'25px'}} className='w-100 h-75 bg-color-1 rounded' onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu size={40} color='white'/></button>
      <Menu className={`burger-menu ${theme}`} htmlClassName='p-0' isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <div className={`container-fluid  p-0 ${theme}`}>
          <div className="row p-0 d-flex flex-column justify-content-around align-items-center">
            <div className="col-11 my-1 border-bottom"><Link to={'/'} className={`nav-link me-3 py-2 ${theme=='bg-light'?'text-dark':'text-light'}`} >{t("Home")}</Link></div>
            <div className="col-11 my-1 border-bottom"><Link to={'/shop'} className={`nav-link me-3 py-2 ${theme=='bg-light'?'text-dark':'text-light'}`}>{t("Shop")}</Link></div>
            <div className="col-11 my-1 border-bottom"><Link to={'/about'} className={`nav-link me-3 py-2 ${theme=='bg-light'?'text-dark':'text-light'}`} >{t("About")}</Link></div>
            <div className="col-11 my-1 border-bottom"><Link to={'/contact'} className={`nav-link me-3 py-2 ${theme=='bg-light'?'text-dark':'text-light'}`} >{t("Contact")}</Link></div>
            <div className="col-11 my1 border-bottom"><Link to={'/cart'} className={`nav-link me-3 py-2 ${theme=='bg-light'?'text-dark':'text-light'}`}>{t("Cart")}</Link></div>
            <div className="col-11 my-1 border-bottom"><Link to={'/wishlist'} className={`nav-link me-3 py-2 ${theme=='bg-light'?'text-dark':'text-light'}`}>{t("Wishlist")}</Link></div>
            <div className={`col-11 my-1 border-bottom text-light ${theme=='bg-light'?'text-dark':'text-light'}`}>
              {
                isLoggedIn?
                <>
                <SubMenu title={userNameFromLocal}>
                <button className='w-100 btn btn-danger' onClick={()=>logOut()}><MdOutlineLogout size={30}/>Logout</button>
                {
                              isAdminIn?
                              <>
                             <button className='btn btn-warning w-100' onClick={()=>navigate("/admin")}>Admin</button>
                              </>
                              :
                              <></>
                            }
                </SubMenu>
                </>
                :
              <Link to={'/login'} className={`nav-link me-3 py-2 ${theme=='bg-light'?'text-dark':'text-light'}`}>{t("Sign-In")}</Link>
              }
              
            </div>
            <div className="col-11 m-0 p-0 bg-white burger-menu-end">-</div>
          </div>
        </div>
        
      </Menu>
    </>
  )
}

export default BurgerMenu
