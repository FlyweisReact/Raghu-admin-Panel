/** @format */

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import HOC from "../../layout/HOC";
import axios from "axios";

const ProductView = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/level/${id}`
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div style={{ color: "black" }}>
       <div style={{display : 'flex' , justifyContent : 'space-between'}}>
       <video width="700" height="240" controls>
          <source src={data.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={data.image} alt="" style={{width : '500px'}} />

       </div>
       
       <p style={{fontSize :'2rem' , border : '1px solid black' , width : '400px' , padding : '10px' , marginTop : '20px'}}> <span style={{fontWeight : '600'}}>Title:</span> {data.title}</p>

        <p style={{fontSize :'2rem' , border : '1px solid black' , width : '90%' , padding : '10px' , marginTop : '20px'}}>{data.content}</p>
        <p>{data.about}</p>
        <p> {data.price}</p>
        <p> {data.actualprice}</p>
        <p> {data.discount}</p>
      </div>
    </>
  );
};

export default HOC(ProductView);
