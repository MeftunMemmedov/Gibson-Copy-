import React, { useContext, useEffect } from 'react'
import "../../src/assets/css/cart.css"
import { useCart } from 'react-use-cart'
import { useNavigate } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { BsCartX } from "react-icons/bs";
import { MyContext } from '../context/GlobalContext';
import { useTranslation } from 'react-i18next';


const Cart = () => {
  const[products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts]=useContext(MyContext)
  const {items, removeItem, updateItemQuantity, setItems ,cartTotal} = useCart();
  const {t}=useTranslation()
  const navigate=useNavigate();

  const checkOut=()=>{
    isLoggedIn?navigate('/chekoutsuccess'):navigate('/login')
    setItems([])
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div className={`cart-box`}>
    {items.length==0 ? 
      <div className='container-fluid '>
        <div className='row cart-is-empty d-flex justify-content-center align-items-center my-5'>
        <BsCartX size={300} color='red'/>
          <h2 className='my-2'>{t("Your Cart Is Currently Empty")}</h2>
          <button className='w-50 btn btn-success text-light my-3' onClick={()=>navigate('/shop')}><TiShoppingCart size={30} color='black'/>{t("Go to Shop")}</button>
        </div>
      </div> 
      :
     <div className='container-fluid'>
      <div className='row '>
          
      </div>

      
      {items.map((item, index)=>{
        return (
          <>
          
          <div className='container'>
            <div className={'row my-4 rounded cart-box-2 shadow'}>
              <div className='col-sm-1 col-3 d-flex justify-content-center align-items-center bg-light rounded p-2'>
                <img src={item.image_1} width={'50%'} className='rounded w-100 '/>
              </div>
              <div className='col-6 text-center d-flex align-items-center justify-content-center'><h3>{item.name}</h3></div>
              <div className='col-sm-2 col-3 d-flex justify-content-center align-items-center price-fonts'><h3>{item.price * item.quantity}$</h3></div>
              <div className='col-sm-2 col-12 d-flex justify-content-between align-items-center px-3 py-3'>
                        <button className={` border-0 bg-transparent w-25 fs-3 fw-bold ${theme=='bg-black text-light'?'text-light':''}`} onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <span className='fs-1 w-50 rounded fs-6 fw-bold border py-3 py-sm-0'>{item.quantity}</span>
                        <button className={`border-0 bg-transparent w-25 fs-3 fw-bold ${theme=='bg-black text-light'?'text-light':''}`} onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>  
              </div>
              <div className='col-sm-1 col-12 py-md-0 py-3 d-flex justify-content-center align-items-center p-0'><button className='btn btn-danger fw-bold w-50 p-0 m-0' onClick={()=>removeItem(item.id)}>X</button></div>  
            </div>
          </div>
          </>
        )
      })}
      <div className='row text-start py-4 px-3 d-flex justify-content-end align-items-center'>
          <div className='col-lg-3 col-9 border rounded'>
            <div className='row border-bottom p-1'>
              <div className='col-6 border-end text-center'><h2>{t("Total")}</h2></div>
              <div className='col-6 text-center'><h2>$ {cartTotal}$</h2></div>
            </div>
            <div className='row py-3'>
              <div className='col-12 d-flex justify-content-center align-items-center'>
                <button className={`btn btn-warning mx-3 ${!isLoggedIn?'disabled':''}`} onClick={checkOut}>{t("Checkout")}</button>
                <h6 className={`${!isLoggedIn?'d-block text-danger':'d-none'}`}>{t("You must login")}</h6>
              </div>
            </div>
          </div>        
      </div>
    </div>
}




</div>






  )
}

export default Cart
