import React from 'react'
import HOC from '../layout/HOC'

const ResourceBlog = () => {
  return (
    <>
        <p style={{color : 'black' , fontSize : '2rem'}}>Resources Blogs</p>

        <div className='blogs'>
            
        </div>
    </>
  )
}

export default HOC(ResourceBlog)