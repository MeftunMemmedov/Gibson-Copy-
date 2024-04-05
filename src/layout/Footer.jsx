import React from 'react'
import '../assets/css/footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";





const Footer = () => {
  return (
    <>
      <footer className='bg-black border-top'>
        <div className="container-fluid h-100">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-6 text-center h-100">
                  
                    <div className="row  py-3">
                        <div className='col-12 m-auto w-75 h-100'>
                            <ul className='list-unstyled d-flex flex-column justify-content-between align-items-start w-100 fw-bold text-light text-center h-100 '>
                                <li><Link className='nav-link' to='/about'>About the company</Link></li>
                                <li><Link className='nav-link my-1' to='/contact'>Contact</Link></li>
                                <li><Link className='nav-link my-1' to='/blog'>Blog</Link></li>
                                <li><Link className='nav-link my-1' to='/faq'>FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-6 h-100 ">
                    <div className="row d-flex justify-content-between align-items-end h-100 mt-5">
                        <div className="col-lg-2 col-4 py-3 mx-2 mb-3 bg-color-2 rounded"><FaFacebookF size={30} color='white'/></div>
                        <div className="col-lg-2 col-4 py-3 mx-2 mb-3 bg-color-2 rounded"><FaTwitter size={30} color='white'/></div>
                        <div className="col-lg-2 col-4 py-3 mx-2 mb-3 bg-color-2 rounded"><FaYoutube size={30} color='white'/></div>
                        <div className="col-lg-2 col-4 py-3 mx-2 mb-3 bg-color-2 rounded"><IoChatboxEllipsesSharp size={30} color='white'/></div>
                        <div className="col-lg-2 col-4 py-3 mx-2 mb-3 bg-color-2 rounded"><RiInstagramFill size={30} color='white'/></div>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-around py-5">
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/7LvvcLDhK4OSfSTXHRAPis/c0a3a0c2a16ff9c9723dd05fc27b89d5/logo-gibson-white.svg" className='w-100'/></div>
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/2vuAzO488GYR7lW1ZPv2zN/1ee1a3e256231cbfd5666b52595e0681/logo-epiphone-white.svg" className='w-100'/></div>
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/3wJBD5R9NsUGp9bUizkcqC/d5a17a1e90708ba5c9b07af898377e16/logo-kramer-white.svg" className='w-100'/></div>
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/52ZxsgyuuWjWD76SMpethr/5822f0a709ec513eb7f5eb9fddcd39af/logo-steinberger-white.svg" className='w-100'/></div>
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/i6ci5z3HECPtIJelzXlLF/2d2d28b5ba9d5d492bfd6a6363fe8a08/logo-krk-white.svg" className='w-100'/></div>
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/2ARgLVx3fMLpkrpN2u3TJO/6833a087050b0cd52708c29610e9057f/logo-mesa-boogie-white.png" className='w-100'/></div>
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/39WC3pEwPVyKBzoXJOMtX4/df902ad3e948b8fb93923190f5c67579/_Maestro_cursive_white__1_.png" className='w-100'/></div>
                <div className="col-md-1 col-3"><img src="https://images.ctfassets.net/m8onsx4mm13s/2fndZfBmz5zyP6Jncsr45l/1ebb716f49e544d3addcf2650f0e74d0/LiftonLeatherGoods_Logo.png" className='w-100'/></div>
            </div>
        </div>
        
      </footer>
    </>
  )
}

export default Footer
