import React from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../../layout/HOC'

const ProductView = () => {
    const {id} = useParams()


    const fetchData = async () => {
      try{
        const { dtaa }
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div>{id}</div>
  )
}

export default HOC(ProductView)