import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { removeBlog } from '../redux/Action'
const BlogList = () => {

    const blogs=useSelector((store)=>store.AppReducer)
    const dispatch=useDispatch()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className="col-12 my-4 d-flex justify-content-end">
                <Link to={'/addblog'} className=' btn btn-primary p-3'>Create New +</Link>
            </div>
            <div className='col-12 mb-5'>
            {blogs.map((blog)=>{
        return(
 
            <div className='row border rounded my-3 p-2'>              
                <div className='col-lg-10 col-6 text-start'><h2>{blog.title}</h2></div>
                <div className='col-lg-2 col-6 d-flex justify-content-around align-items-center'>
                    <Link className='btn btn-warning w-50 mx-2' to={`/editBlog/${blog.id}`}>Edit</Link>
                    <button className='btn btn-danger w-50 ' onClick={()=>dispatch(removeBlog(blog.id))}>Delete</button>
                </div>
            </div>
        )
      })}
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogList
