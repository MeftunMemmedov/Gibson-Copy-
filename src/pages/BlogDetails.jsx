import React, { useContext } from 'react'
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../context/GlobalContext';
import { useSelector } from 'react-redux';

const BlogDetails = () => {

   
    const {id} = useParams();
    const [getBlog, setGetBlog] = useState();
    const Blogs=useSelector((store)=>store.AppReducer)

    

    useEffect(()=>{
        if(id){
            setGetBlog(Blogs.find(blog=>blog.id==id))
        }
    },[id])

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <>
      {
        <>
          <div className='container'>
            <div className='row d-flex flex-column align-items-center'>
              <div className='col-6 my-3'>
                <h2>{getBlog?.title}</h2>
              </div>

              <div className='col-10' style={{height:'500px'}}>
                <img src={getBlog?.image} className='h-100 w-100' style={{objectFit:'contain'}}/>
              </div>

              <div className='col-12 my-3'>
              <p className='fs-4'>{getBlog?.description}</p>
              </div>
            </div>
          </div>


        <h2>
            
        </h2>
        

        </>
      }
    </>
  )
}

export default BlogDetails
