/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import HOC from "../layout/HOC";

const Expert = () => {
  return (
    <>
      <div style={{display : 'flex' , justifyContent : ''}}>
        <p style={{ color: "black" }}>Our Experts</p>
        <Button>Add Experts</Button>
      </div>
    </>
  );
};

export default HOC(Expert);