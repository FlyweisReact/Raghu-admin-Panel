import React, { useState } from 'react'
import HOC from '../layout/HOC'

const ResourceBlog = () => {

    const [ data , setData ] =useState([])
    const fetchData = async () => {}
  return (
    <>
        <p style={{color : 'black' , fontSize : '2rem'}}>Resources Blogs</p>

        <div className='blogs'>
                <div></div>
        </div>
    </>
  )
}

export default HOC(ResourceBlog)