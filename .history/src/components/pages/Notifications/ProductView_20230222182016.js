import React from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../../layout/HOC'
import axios

const ProductView = () => {
    const {id} = useParams()


    const fetchData = async () => {
      try{
        const { data  } = await axios.get()
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div>{id}</div>
  )
}

export default HOC(ProductView)