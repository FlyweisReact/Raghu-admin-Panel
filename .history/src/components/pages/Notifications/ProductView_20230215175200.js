import React from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../../layout/HOC'

const ProductView = () => {
    const {id} = useParams()


  return (
    <div>{id}</div>
  )
}

export default HOC(ProductView)