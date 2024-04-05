import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, removeBlog } from '../redux/Action'
import { Link, useNavigate } from 'react-router-dom'
import { ImBlog } from "react-icons/im";
import { MyContext } from '../context/GlobalContext'


const Admin = () => {
        const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]=useContext(MyContext)
       

        const blogs=useSelector((store)=>store.AppReducer)
        const dispatch=useDispatch()

        


        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    
   
  return (
    <>
    
      <div className="container">
      <div className="row">
        <div className="col-12 p-5 text-start">
          <h2 style={{fontSize:"80px"}}>Hello Admin!</h2>
        </div>
        <div className='col-12 my-4 mb-5'>
            <div className='row'>
              <Link to={'/bloglist'}>
              <div className='col-md-4 col-12 bg-primary border rounded p-4'>
                <div className='row'>
                  <div className="col-12 d-flex justify-content-between">
                    <ImBlog size={90} color='white'/>
                    <h5 style={{fontSize:'90px'}} className='text-light'>{blogs.length}</h5>
                  </div>
                  <div className='col-12'>
                    <h2 className='text-end text-light'>Blogs</h2>
                  </div>
                </div>              
              </div>
              </Link>
            </div>

           
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Admin
