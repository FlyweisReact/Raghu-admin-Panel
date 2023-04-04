import axios from 'axios'
import React, { useEffect, useState } from 'react'

const New = () => {
    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try{
                const { data } = await axios.get('https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/all')
                setData(data)
        }catch(e) { 
            console.log(e)
        }
    }

useEffect(() => {
    fetchData()
})


  return (
   
  )
}

export default New