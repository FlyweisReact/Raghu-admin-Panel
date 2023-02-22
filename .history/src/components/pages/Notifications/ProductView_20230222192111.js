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
      <P></P>
        {data.level}
        {data.include?.map((i, index) => (
          <p key={index}> {i} </p>
        ))}
        {data.title}
        <img src={data.image} alt="" />
        <video width="320" height="240" controls>
          <source src={data.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {data.content}
        {data.about}
        {data.price }
        {data.actualprice}
        {data.discount}
      </div>
    </>
  );
};

export default HOC(ProductView);
