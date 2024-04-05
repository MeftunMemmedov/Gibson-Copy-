import React from 'react'
import { TbError404 } from "react-icons/tb";
import { MdError } from "react-icons/md";



const ErrorPage = () => {
  return (
    <>
      <div className='container'>
        <div className="row my-5">
            <div className="col-12">
                <TbError404 size={300}/><MdError size={200} color='red'/>
                <h2>Sorry, page not found</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
