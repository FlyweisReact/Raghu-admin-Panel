/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button , Table } from "react-bootstrap";
import HOC from "../layout/HOC";


const Expert = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data }= await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/experts/")
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
      <div style={{display : 'flex' , justifyContent : 'space-between'}}>
        <p style={{ color: "black" }}>Our Experts</p>
        <Button variant='outline-success'>Add Experts</Button>
      </div>

      <Table striped bordered hover style={{marginTop : '2%'}} >
    <thead>
      <tr>
        <td>Image</td>
        <td>Name</td>
        <td>Position</td>
        <td>Facebook Link</td>
        <td>Twitter Link</td>
        <td>Instagram Link</td>
        <td>Google Link</td>
      </tr>
    </thead>
    <tbody>
      {data?.data?.map((i , index) => (
        <tr key={index}>
          <td>
          <img src={i.image} alt='' style={{width :'100px'}} />
           </td>
           <td> {i.name} </td>
           <td> {i.position} </td>
           <td> {i.facebook} </td>
           <td> {i.twitter} </td>
           <td> {i.others} </td>
           <td> {i.google} </td>
        </tr>
      ))}
    </tbody>
      </Table>

    </>
  );
};

export default HOC(Expert);
