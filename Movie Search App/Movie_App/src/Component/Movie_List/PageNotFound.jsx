import React from 'react'
import NotFoundpage2 from "../../assets/Images/NotFoundpage2.jpg";
function PageNotFound() {
  return (
    <div>
        <p className='h1 text-center mt-5'>404 Oops!</p>
        <div className='w-25 mx-auto my-5'>
            <img className='rounded' src={NotFoundpage2} alt="Not Found Page" style={{maxWidth : '100%'}}/>
        </div>
    </div>
  )
}

export default PageNotFound