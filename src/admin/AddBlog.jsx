import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog } from '../redux/Action'
import { v4 as uuidv4 } from 'uuid'

const Addblog = () => {

    const [blog, setBlog]=useState({
        id:uuidv4(),
        title:'',
        description:'',
        image:''
    })

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        dispatch(addBlog(blog))
        navigate('/bloglist')
    }

  return (
    <div className='container my-5 py-5'>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className='col-2'><label htmlFor='title'>Title</label></div>
        <div className="col-10 my-2"><input type='text' id='title' className='w-100 border rounded' name='title' onChange={handleChange}/></div>
        
        <div className='col-2'><label htmlFor='description'>Description</label></div>
        <div className="col-10 my-2"><input type='text' id='description' className='w-100 border rounded' name='description' onChange={handleChange}/></div>
        
        <div className='col-2'><label htmlFor='img-link'>Image-Link</label></div>
        <div className="col-10 my-2"><input type='text' id='img-link' className='w-100 border rounded' name='image' onChange={handleChange}/></div>
        
        <div className="col-12"><button type='submit' className='btn btn-primary'>Create</button></div>       
      </form>
    </div>
  )
}

export default Addblog
