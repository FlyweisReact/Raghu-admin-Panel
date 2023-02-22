import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../../layout/HOC'
import axios from 'axios'

const ProductView = () => {
    const {id} = useParams()
    const [ data , setData ] = useState([])


    const fetchData =useCallback(async () => {
      
    })

    useEffect(() => {
      fetchData()
    },[])

  return (
    <div>{id}</div>
  )
}

export default HOC(ProductView)