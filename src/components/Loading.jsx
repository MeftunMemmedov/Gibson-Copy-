import React from 'react'
import { GiGuitar } from "react-icons/gi";

const Loading = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-12 my-5 py-5">
            <GiGuitar size={200} className='loading'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Loading
