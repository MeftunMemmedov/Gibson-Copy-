import React from 'react'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { MyContext } from '../context/GlobalContext'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import '../assets/css/login.css'
import { useTranslation } from 'react-i18next'

const Login = () => {

  const [user, setUser]=useState({
    email: '',
    password: ''
})

  const [mailError,setMailError]=useState('')
  const [passwordError, setPasswordError]=useState('')
  const [errorStyle,setErrorStyle]=useState('')



  const navigate=useNavigate()
  const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme, getProducts, isLoading,setIsLoading, isAdminIn, setIsAdminIn]=useContext(MyContext)
  const {t}=useTranslation()
  const userInLocal=JSON.parse(localStorage.getItem('USERS')) || ''

  const admins=['admin1@mail.com', 'admin2@mail.com']

const login=(e)=>{
    e.preventDefault();    

    if(userInLocal.some((usr)=>usr.email==user.email && usr.password==user.password)){
        if(admins.some((mail)=>mail==user.email)){
          localStorage.setItem('isAdminIn', true)
        } else {
          localStorage.setItem('isAdminIn', false)
        }

        let getUserInfo=userInLocal.find((usr)=>usr.email==user.email)
        localStorage.setItem('userName', getUserInfo.username)

        setIsLoggedIn(true)
        localStorage.setItem('isloggedin', true)
        navigate('/')
     } else if( user.email=='' || user.password==''){
          setMailError("Mail or Password can't blank")
          setPasswordError("Mail or Password can't blank")
          setErrorStyle('border-bottom border-danger')
          // setIsLoggedIn(false)
          localStorage.setItem('isloggedin', false)
      }else {
        setMailError("Mail or Password is not correct")
        setPasswordError("Mail or Password is not correct")
        setErrorStyle('border-bottom border-danger')
        // setIsLoggedIn(false)
        localStorage.setItem('isloggedin', false)
     }
}   


useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <>
    <div className="container-fluid login-page d-flex justify-content-end pe-5">
      <div className="col-lg-5 col-11 me-lg-5">
        <h2 className='text-light my-5'>{t("Sign-In")}</h2>
        <div className="row text-start">
          <form onSubmit={login} className={`login-box py-1 py-5 border bg-white`}>
            <div className="col-12">
              <label htmlFor="exampleInputEmail1" className="form-label text-dark">{t("Email")}</label>
                  <input 
                    type="email" 
                    name='email'
                    className={`form-control ${errorStyle}`} 
                    id="exampleInputEmail1" 
                    placeholder="email@example.com" 
                    value={user.email} 
                    onChange={(e)=>setUser({...user,[e.target.name]: e.target.value})}
                    />    
                    <h6 className='text-danger'>{t(mailError)}</h6>
            </div>

            <div className="col-12">
              <label htmlFor="exampleInputPassword1" className="form-label text-dark">{t("Password")}</label>
                  <input 
                    type="password" 
                    className={`form-control ${errorStyle}`} 
                    id="exampleInputPassword1" 
                    placeholder="Password" 
                    name='password' 
                    value={user.password} 
                    onChange={(e)=>setUser({...user,[e.target.name]: e.target.value})}
                    /> 
                    <h6 className='text-danger'>{t(passwordError)}</h6> 
            </div>

            <div className="col-12">
                <button type="submit" className="btn bg-color-2 text-light login-submit-btn w-100 my-4">{t("Sign In")}</button>
            </div>

            <div className="col-12">
              <p className='text-dark'>{t("New to Gibson? Then")} <Link to={'/register'} className='text-danger'>{t("Sign Up Now")}</Link></p>
            </div>
          </form>
          
        </div>
      </div>
    </div>


      
    </>
  )
}

export default Login
