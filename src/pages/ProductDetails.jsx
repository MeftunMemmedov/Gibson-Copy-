import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { supabase } from '../data/Data';
import '../assets/css/productdetails.css'

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import { Rating } from '@mui/material';

import { MdLocalShipping } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";



import ReactStars from 'react-stars'
import { useTranslation } from 'react-i18next';
import { MyContext } from '../context/GlobalContext';
import Loading from '../components/Loading';
import WishListBtn from '../components/WishListBtn';



const ProductDetails = () => {
    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading]=useContext(MyContext)
    const {addItem} = useCart();
    const {id} = useParams();
    const {t}=useTranslation()
    const [getData, setGetData] = useState([]);
    const product=getData[0]
    console.log(getData)

    const images = [
        {
            original: product?.image_1,
            thumbnail: product?.image_1,
            originalHeight:'450',
            thumbnailClass:'h-100'
        },
        {
            original: product?.image_2,
            thumbnail: product?.image_2,
            originalHeight:'450',
            thumbnailClass:'h-100'
            
        },
        {
            original: product?.image_3,
            thumbnail: product?.image_3,
            originalHeight:'450',
            thumbnailClass:'h-100'
        },
        {
            original: product?.image_4,
            thumbnail: product?.image_4,
            originalHeight:'450',
            thumbnailClass:'h-100'
        },
      ];
      

async function getProductDetails(){
      const { data,error } = await supabase
      .from('Guitars')
      .select("*")
      .eq('id', id)
  
      setGetData(data)    
     }

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

     useEffect(()=>{
      getProductDetails()      
     },[id])

     if(isLoading){
        return <Loading/>
    }

  return (
    <>
      <div className="container-fluid py-5">

        <div className="col-12 product-details-box-1 m-auto  d-flex align-items-center text-start">
            <div className="row product-details-box-1-1 w-100">
                <div className="col-md-7 col-12 bg-light">
                <ImageGallery items={images} thumbnailPosition='left' disableThumbnailScroll={true} showFullscreenButton={false} showPlayButton={false} />
                </div>
                <div className="col-md-5 col-12">
                    <div className="row">
                        <div className="col-12 py-3 mt-1"><h3>{product?.name}</h3></div>
                        <hr />
                        <div className="col-12 pt-2"><h4>$ {product?.price}</h4></div>
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-lg-10 col-8"><button className='rounded bg-color-2 w-100' onClick={()=>addItem(getData[0])}>{t("Add to Cart")}</button></div>
                                <div className={`col-lg-1 col-2 position-relative rounded`}><WishListBtn item={product || ''}/></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-7 col-12 d-flex justify-content-lg-end justify-content-center"><ReactStars count={5}  value={product?.rating} size={50} color2={'#ffd700'} /></div>
                                <div className="col-lg-5 col-12 d-flex align-items-end justify-content-lg-start justify-content-center"><h3 className='mb-3'>{product?.rating}</h3></div>
                            </div>
                        </div>
                        <hr className='my-3'/>
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col-3"><FaMoneyBills size={60}/></div>
                                <div className="col-9">
                                    <h4>{t("0% Finance on Purchases over $300")}</h4>
                                    <p>{t("If you would like to advantage of our 0% Finance options, please choose V12 Finance at the Checkout as your payment option.")}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3"><MdLocalShipping size={60}/></div>
                                <div className="col-9">
                                    <h4>{t("Free shipping")}</h4>
                                    <p>{t("We offer free shipping on all orders over £99")}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


        <div className="col-12 my-3">
            <div className="row text-start">
                <div className="col-12 my-4"><h2>{t(product?.about_guitar_title)}</h2></div>
                <div className="col-12"><p>{t(product?.about_guitar_description)}</p></div>
            </div>
        </div>

<hr className=''/>

        <div className="col-12 text-start">
            <h2 className='my-3 text-gold'>{t("Body")}</h2>
            <div className="row">
                <div className="col-4">
                    <h6>{t("Body Style")}</h6>
                    <p>{product?.body_bodyStyle}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Body Shape")}</h6>
                    <p>{product?.body_bodyShape}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Body Material")}</h6>
                    <p>{t(product?.body_bodyMaterial)}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Top")}</h6>
                    <p>{product?.body_top}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Binding")}</h6>
                    <p>{product?.body_binding}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Body Finish")}</h6>
                    <p>{product?.body_bodyFinsih}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Weight Relief")}</h6>
                    <p>{product?.body_weightRelief}</p>
                </div>
            </div>
        </div>
<hr/>
        <div className="col-12 text-start">
            <h2 className='my-3'>{t("Neck")}</h2>
            <div className="row">
                <div className="col-4">
                    <h6>{t("Neck Profile")}</h6>
                    <p>{product?.neck_profile}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Scale Length")}</h6>
                    <p>{product?.neck_scaleLength}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Fingerboard Material")}</h6>
                    <p>{t(product?.neck_fingerboardMaterial)}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Fingerboard Radius")}</h6>
                    <p>{product?.neck_fingerboardRadius}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Fret Count")}</h6>
                    <p>{product?.neck_fretCount}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Frets")}</h6>
                    <p>{t(product?.neck_Frets)}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Nut Material")}</h6>
                    <p>{product?.neck_nutMaterial}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Nut Width")}</h6>
                    <p>{product?.neck_nutWidth}</p>
                </div>
                <div className="col-4">
                    <h6>{t("End of Board With")}</h6>
                    <p>{product?.neck_endOfBoardWidth}</p>
                </div>
                <div className="col-4">
                    <h6>{t("Inalys")}</h6>
                    <p>{product?.neck_inalys}</p>
                </div>
            </div>
            
        </div>

      </div>
    </>
  )
}

export default ProductDetails
