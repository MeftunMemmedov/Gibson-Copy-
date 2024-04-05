import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useWishlist } from 'react-use-wishlist'
import { MyContext } from '../context/GlobalContext'

const WishListBtn = ({item}) => {

  

    const {inWishlist, removeWishlistItem, addWishlistItem}=useWishlist();
    const toggleWishlist=(myProduct)=>{
        if(inWishlist(myProduct.id)){
            removeWishlistItem(myProduct.id)
        } else {
            addWishlistItem(myProduct)
        }
    }

  return (
    <>
      <button className='border-0 bg-transparent position-absolute wishlist-btn' onClick={()=>toggleWishlist(item)}>
        {inWishlist(item.id)?<FaHeart size={30} color='red'/>:< FaRegHeart size={30} color='gray'/>}
        </button>
    </>
  )
}

export default WishListBtn
