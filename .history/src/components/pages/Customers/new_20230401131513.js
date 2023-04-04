import axios from 'axios'
import React, { useState } from 'react'

const New = () => {
    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try{
                const { data } = await axios.get('')
        }catch(e) { 
            console.log(e)
        }
    }


  return (
   
  )
}

export default New