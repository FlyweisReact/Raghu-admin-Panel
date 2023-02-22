import React, { useEffect, useState , useCallback } from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../../layout/HOC'
import axios from 'axios'

const ProductView = () => {
    const {id} = useParams()
    const [ data , setData ] = useState([])


    const fetchData =useCallback(async () => {
      try{
        const { data  } = await axios.get(`https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/level/${id}`)
     setData(data.data)
      }catch(err){
        console.log(err)
      }
    },[id])

    useEffect(() => {
      fetchData()
    },[fetchData])


  return (
    <>
      <div style={{color : 'black'}}>
      {data.level}

      </div>
    </>
  )
}

export default HOC(ProductView)