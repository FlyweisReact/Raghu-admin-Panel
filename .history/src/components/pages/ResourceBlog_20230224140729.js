/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import HOC from "../layout/HOC";

const ResourceBlog = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog"
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <p style={{ color: "black", fontSize: "2rem" }}>Resources Blogs</p>

      <div className="blogs">
        {data.map((i, index) => (
          <div key={index}>
            <img src={i.image} alt="" />
            <p> <span style={{fontWeight : 'bold'}}>Description : </span>  {i.desc.substring(0, 100) + "..."} </p>
            <p> <span style={{fontWeight : 'bold'}}>Date</span> {i.date} </p>
            <Button style={{width : '80%' , display : 'block' , margin : 'auto'}}>View</Button>
            <Button>Delete</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HOC(ResourceBlog);
