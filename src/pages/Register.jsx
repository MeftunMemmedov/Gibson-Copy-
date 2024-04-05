import React, { createElement, useContext , useState, useEffect} from 'react'
import '../assets/css/register.css'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/GlobalContext'
import { basicSchema } from '../schema'
import { IoIosWarning } from "react-icons/io";
import { useTranslation } from 'react-i18next'


const Register = () => {

    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme]=useContext(MyContext)

    const [mailError,setMailError]=useState(false)
    const navigate=useNavigate()
    const {t}=useTranslation()
    
    let users=JSON.parse(localStorage.getItem('USERS'))?JSON.parse(localStorage.getItem('USERS')):[]

    // const userInLocal=JSON.parse(localStorage.getItem('users')) || ''
    
    const {values, handleChange, handleSubmit, handleBlur, errors, touched}=useFormik({
        initialValues: {
            email: '',
            username:'',
            password:''
        }, 
        validationSchema: basicSchema,
        onSubmit: values=>{
           
            if(users.some((usr)=>usr.email==values.email)){
                let errorSign=createElement('IoIosWarning')
                setMailError(true)       
              return false
            } else {
                // localStorage.setItem('users', JSON.stringify(values))
                users.push(values)
                console.log(users)
                localStorage.setItem('USERS', JSON.stringify(users))
                navigate('/login')
            }
        },
    })

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      <div className="container-fluid register-page">
        <div className="row">
            <div className="col-12 my-5">
            <div className="row text-start text-light">
                    <div className="col-lg-5 col-9 ms-5">
                        <h2>{t("Sign Up for Gibson")}</h2>
                        <h6 >{t("Get the inside scoop on new releases, exclusive guitars, merch & apparel, content, and more.")}</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-9 ms-5 border bg-white register-box">
                <div className="row">
                    <form onSubmit={handleSubmit} noValidate className=' wrapper text-start rounded needs-validation '>
                        
                        <div className="col-12 my-3">
                            <label className='text-dark' htmlFor="email" >{t("Email")}</label>
                            <input 
                            type='email'
                            id='email'
                            placeholder='Enter your Mail'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-100 border-bottom ${errors.email && touched.email ? 'input-error' : ''}`}
                            />
                            {errors.email && touched.email ? <span className='d-flex align-items-center'><h6 className='text-danger m-0 p-0'>{(t(errors.email))}</h6> <IoIosWarning size={20} color='red'/></span>  : ''}
                            {mailError? <span className='d-flex align-items-center'><h6 className='mt-2 text-danger'>{t("Email already exists")}</h6><IoIosWarning size={20} color='red'/></span>:''}
                        </div>
                        
                        <div className="col-12 my-3">
                            <label className='text-dark' htmlFor="username">{t("Username")}</label>
                            <input 
                            type='text'
                            id='username'
                            placeholder='Enter your Name'
                            value={values.username}
                            onChange={handleChange}
                            className={`w-100 border-bottom ${errors.username && touched.username ? 'input-error' : ''}`}
                            required
                            />
                            {errors.username && touched.username ?<span className='d-flex align-items-center'><h6 className='text-danger mt-2'>{t(errors.username)}</h6> <IoIosWarning size={20} color='red' className=''/></span>: ''}
                        </div>

                        <div className="col-12 my-3">
                            <label className='text-dark' htmlFor="password">{t("Password")}</label>
                            <input 
                            type='password'
                            id='password'
                            placeholder='Enter your Password'
                            value={values.password}
                            onChange={handleChange}
                            required
                            className={`w-100 border-bottom  ${errors.password && touched.password ? 'input-error' : ''}`}
                            />
                            {errors.password && touched.password ? <span className='d-flex align-items-center'><h6 className='text-danger mt-1'>{t(errors.password)}</h6><IoIosWarning size={20} color='red' className=''/></span> : ''}
                        </div>

                        <div className="col-12 my-4"><button type='submit' className='btn bg-color-2 text-light register-form-submit-btn w-100'>{t("Sign Up Now")}</button></div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Register
