import React, { useContext } from 'react'
import { useEffect } from 'react';
import { BsCartCheckFill } from "react-icons/bs";
import { array } from 'yup';
import { MyContext } from '../context/GlobalContext';
import SingleProduct from '../components/SingleProduct'
import Loading from '../components/Loading'


const SuccessfulCheckout = () => {
  
  const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading]=useContext(MyContext)


  function shuffle(array){
    array.sort(()=>Math.random()-0.5);
  }

  useEffect(()=>{
    shuffle(products)
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row py-5'>
            <div className='col-12 py-5'>
                <BsCartCheckFill size={300} color='green'/>
            </div>
            <div className='col-12'>
                <h2>Thank you for your purchase!</h2>
            </div>
        </div>
        <div className="row">
          {products.slice(0,4).map((item)=>{
            if(isLoading){
              return <Loading />
            }
            return <SingleProduct item={item}/>
          })}
        </div>
      </div>
    </>
  )
}

export default SuccessfulCheckout
