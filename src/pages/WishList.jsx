import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import { useEffect } from 'react';

import { FaHeartCircleXmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

import SingleProduct from '../components/SingleProduct';

const WishList = () => {

    const {items}=useWishlist()
    const navigate=useNavigate()
 

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <>
      <div className="container-fluid">
        {
            items.length==0?
            <div className='row py-5 d-flex flex-column align-items-center justify-content-between'>
                <FaHeartCircleXmark size={300} className='my-5'/>
                <h2 className='my-2'>Your Wishlist is Currently Empty"</h2>
                <button className='my-3 w-50 btn btn-success text-light' onClick={()=>navigate('/shop')}><TiShoppingCart size={30} color='black'/>Go to Shop</button>
            </div>:
            <>
            <div className='row my-2  px-4 mb-4 d-flex border-secondary'>
            {
                items.map((item)=>{
                    return <SingleProduct item={item} />
                })
            }
            </div>
            </>
        }
        
      </div>
    </>
  )
}

export default WishList
