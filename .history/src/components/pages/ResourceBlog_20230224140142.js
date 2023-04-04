import axios from 'axios'
import React, { useState } from 'react'
import HOC from '../layout/HOC'

const ResourceBlog = () => {

    const [ data , setData ] =useState([])
    const fetchData = async () => {
        try{
            const { data } = await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog")
            setData(data.data)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
        <p style={{color : 'black' , fontSize : '2rem'}}>Resources Blogs</p>

        <div className='blogs'>
             {data.map((i ,index) => (
                <div key={index}>
                <img src={i.image} alt='' />
                <p></p>
                </div>
             ))}
        </div>
    </>
  )
}

export default HOC(ResourceBlog)