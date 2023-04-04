import React, { useState } from 'react'
import HOC from '../layout/HOC'

const CourseRegister = () => {

    const [ data , setData ] = useState([])

  return (
    <>
        <p style={{color : 'black' , fontSize : '2rem'}}>Course Register</p>
        
    </>
  )
}

export default HOC(CourseRegister)