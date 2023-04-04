import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HOC from '../layout/HOC'

const CourseRegister = () => {

    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try{
            const { data } = await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/get/all")
            setData(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
    <>
        <p style={{color : 'black' , fontSize : '2rem'}}>Course Register</p>
        
        <

    </>
  )
}

export default HOC(CourseRegister)