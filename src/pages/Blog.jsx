import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import '../assets/css/blog.css'
import { MyContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppReducer } from '../redux/Reducer'
import { useTranslation } from 'react-i18next'

    
const Blog = () => {

    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]=useContext(MyContext)

    const Blogs=useSelector((store)=>store.AppReducer)
    const {t}=useTranslation()
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <>
      <div className={`container ${theme}`}>
        <div className='row'>
        <div className='col-12 text-start py-3 mb-4'>
              <h2 style={{fontSize:"62px"}} className='ps-3 text-secondary'>Blog</h2>
          </div>
        </div>
        {
            Blogs.map((blog)=>{
                return (
        <div className={`row blog-box my-3 border rounded`}>
            <div className='col-sm-5 col-12 p-0 d-flex align-items-center'>
               <img src={blog.image} className='w-100'/>
            </div>
            <div className='col-sm-7 col-12'>
                <div className='row p-3'>
                    <div className='col-12 '>
                       <h2 className='title'> <Link to={`/post/${blog.id}`}  className={theme=='bg-light'?'text-dark':'text-light'}>{t(blog.title)}</Link></h2>
                    </div>

                    <div className='col-12 '>
                        <p className='text-start'>
                        {t(blog.description.slice(0,600))}.....
                        </p>
                    </div>
                    
                    {/* <div className={`col-12`}>
                    {blog.description.length>10?<Link to={`/post/${blog.id}`}  className={theme==='bg-light'?'text-dark':'text-light'}>Davami</Link>:''}
                    </div> */}
                </div>
            </div>
        </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Blog
