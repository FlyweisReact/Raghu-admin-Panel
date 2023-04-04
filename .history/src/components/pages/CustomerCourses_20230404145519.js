/** @format */

import axios from "axios";
import { useCallback, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import HOC from "../layout/HOC";

const CustomerCourses = () => {
  const { id } = useParams();
  const [ data , setData ] = useState([])

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/${id}`
      );
      setData(data)
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  return (
    <>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
        className="response"
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Users Courses
            <hr style={{ width: "70%" }} />
          </span>
        </div>

        {/* Table */}
        <div style={{ overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th> Phone Number </th>
                <th>Email Address</th>
                <th>Courses</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(CustomerCourses);
