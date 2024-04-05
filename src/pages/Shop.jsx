import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/GlobalContext'
import '../assets/css/shop.css'
import SingleProduct from '../components/SingleProduct';
import CategoryBtns from '../components/CategoryBtns';
import Sort from '../components/Sort';
import { useTranslation } from 'react-i18next';
import Loading from '../components/Loading';

//icons
const Shop = () => {

    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading]=useContext(MyContext)
    // const [isLoading, setIsLoading]=useState(true)
    const {t}=useTranslation()
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    
    if(isLoading){
        return <Loading/>
    }

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 ">
                <div className="row d-flex py-5 justify-content-around">
                <CategoryBtns />
                </div>
            </div>
        </div>

        <div className="row d-flex justify-content-end">
            <div className="col-lg-4 col-9">
                <div className="row">
                    <div className="col-4 p-0"><h6 className='text-end pt-1'>{t("Sort By")}</h6></div>
                    <div className="col-8 d-flex justify-content-start"><Sort /></div>
                </div>
                
            </div>
        </div>

        <div className="row">
            <div className="col-12 my-5">
                <div className="row mb-5">
                {
                products.map((item, index)=>{
                    return <SingleProduct item={item}/>
                    })
                }
                </div>
            </div>
        </div>
    </div>

      
    </>
  )
}

export default Shop
