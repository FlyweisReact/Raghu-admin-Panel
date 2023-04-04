import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
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
        
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Course</th>
                    <th>Slot</th>
                </tr>
            </thead>
            <tbody>
                {data?.message?.map((i , index) => (
                    <tr key={index}>
                        <td> {i.email} </td>
                        <td> {i.email} </td>
                        <td> {i.email} </td>
                        <td> {i.email} </td>
                    </tr>
                ))}
            </tbody>
        </Table>

    </>
  )
}

export default HOC(CourseRegister)