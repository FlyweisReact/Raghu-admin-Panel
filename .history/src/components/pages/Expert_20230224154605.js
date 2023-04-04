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

      <Table striped bordered hover >
    <thead>
      <tr>
        <td>Image</td>
        <td>Name</td>
      </tr>
    </thead>
      </Table>

    </>
  );
};

export default HOC(Expert);
