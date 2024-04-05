import React, { useContext , useEffect} from 'react'
import '../assets/css/home.css'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { MyContext } from '../context/GlobalContext';
import SingleProduct from '../components/SingleProduct';
import SingleProductForHome from '../components/SingleProductForHome';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

//icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


//icons

const Home = () => {

    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme]=useContext(MyContext)
    const {t}=useTranslation()
    const navigate=useNavigate()
    const slicedProducts=products.slice(0,5)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 425, min: 376 },
          items: 2
        },
        mobile: {
            breakpoint: { max: 375, min: 0 },
            items: 1
          }
      };

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      

  return (
    <>
      <div className='container-fluid'>
        <div className="row p-0 home-box-1 p-0 position-relative overflow-hidden">
            <div className="col-12 position-absolute h-100">
                <div className="row h-100 d-flex justify-content-end">
                    <div className="col-12 h-100 d-flex flex-column justify-content-center align-items-end  home-box-1-overlay">
                        <div className="row d-flex flex-column justify-content-end align-items-end h-75">
                            <div className="col-12">
                            <h2 className='my-2 text-light text-md-end home-overlay-header'>{t("New Customs and Exclusives")}</h2>
                            </div>

                            <div className="col-12">
                                <h6 className='my-2 mb-5 text-light home-overlay-text'>{t("Shop our latest exclusive finishes and Gibson Custom creations")}</h6>
                            </div>

                            <div className="col-12">
                                <button className='border-0 p-2 w-100 btn-bg-color-1 fs-4' onClick={()=>navigate('/shop')}>{t("View")}<FaArrowRight className='mx-4 mb-1'/></button>
                            </div>
                        </div>
                        
                        
                        
                        
                    </div>
                </div>
            </div>

            {/* <img 
            src="https://www.wallpaperflare.com/static/540/286/418/guitar-room-les-paul-sound-wallpaper.jpg"
            className='home-img p-0'
            /> */}
        </div>
        
        <div className="container-fluid">
        <div className="row home-box-2 py-5">
            <div className="col-lg-4 col-12 h-100 bg-black text-light boxes">
                <div className="row h-100">
                    <div className="col-12">
                        <LiaShippingFastSolid size={90}/>
                    </div>
                    <div className="col-12 text-start">
                        <h4>{t("FREE SHIPPING")}</h4>
                        <p>{t("On US online orders over $50.")}</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-12 border-start border-end h-100 bg-black text-light">
                <div className="row h-100">
                    <div className="col-12">
                        <IoShieldCheckmarkOutline size={90}/>
                    </div>
                    <div className="col-12 text-start">
                        <h4>{t("LIFETIME WARRANTY")}</h4>
                        <p>{t("Free, limited warranty on material and workmanship.")}</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-12 h-100 text-light bg-black">
                <div className="row h-100">
                    <div className="col-12">
                        <FaHandHoldingDollar size={90}/>
                    </div>
                    <div className="col-12 text-start">
                        <h4>{t("FINANCING AVAILABLE")}</h4>
                        <p>{("Options available through Klarna at checkout.")}</p>
                    </div>
                </div>
            </div>
            

        </div>
        </div>


        

        <div className="container-fluid py-5 border-top border-bottom">
            <div className="row py-5">
            <Carousel responsive={responsive}>
            {
                slicedProducts.map((item)=>{
                  return <SingleProductForHome item={item}/>
                })
              }
            </Carousel>
            </div>
        </div>



        <div className="container-fluid p-0">
            <div className="row py-5">
                <div className="col-12 home-box-3">
                    
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Home
