import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editBlog } from '../redux/Action'

const EditBlog = () => {
    const blogs=useSelector((store)=>store.AppReducer)
    const {id}=useParams()
    const myBlog=blogs.find((item)=>item.id==id)
    const [editedBlog, setEditedBlog]=useState(myBlog)

    const handleChange=(e)=>{
        setEditedBlog({...editedBlog, [e.target.name]:e.target.value})
    }

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(editBlog(editedBlog))
        navigate('/bloglist')
    }

  return (
    <>
       <div className='container my-5 py-5'>
        <h2>EDIT</h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className='col-2'><label htmlFor='title'>Title</label></div>
        <div className="col-10 my-2">
            <input 
            type='text' 
            id='title' 
            className='w-100 border rounded'
            name='title' 
            defaultValue={editedBlog.title} 
            onChange={handleChange}
            />
        </div>
        
        <div className='col-2'><label htmlFor='description'>Description</label></div>
        <div className="col-10 my-2">
            <input 
            type='text' 
            id='description' 
            className='w-100 border rounded'
            name='description' 
            defaultValue={editedBlog.description}
            onChange={handleChange}
            />
        </div>
        
        <div className='col-2'><label htmlFor='img-link'>Image-Link</label></div>
        <div className="col-10 my-2">
            <input 
            type='text' 
            id='img-link' 
            className='w-100 border rounded' 
            name='image' 
            defaultValue={editedBlog.image}
            onChange={handleChange}
            />
            </div>
        
        <div className="col-12"><button type='submit' className='btn btn-primary'>Update</button></div>       
      </form>
    </div>
    </>
  )
}

export default EditBlog
