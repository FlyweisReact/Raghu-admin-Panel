/** @format */

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import HOC from "../layout/HOC";


const Expert = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{

    }catch(err)
  }

  return (
    <>
      <div style={{display : 'flex' , justifyContent : 'space-between'}}>
        <p style={{ color: "black" }}>Our Experts</p>
        <Button variant='outline-success'>Add Experts</Button>
      </div>

    </>
  );
};

export default HOC(Expert);
