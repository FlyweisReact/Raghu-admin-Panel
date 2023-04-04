/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";


export const getAllUsers = () => {
  return axios
}

const Customers = () => {
  const [data, setData] = useState("");

  // FetchData
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/all"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/delete/${id}`
      );
      console.log(data);
      toast.success(`Userdeleted successfully`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

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
            All Users
            <hr style={{ width: "70%" }} />
          </span>
        </div>

        {/* Table */}
        <div style={{ overflow: "auto", marginTop: "2%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th> Phone Number </th>
                <th>Email Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.message?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td>{i.first}</td>
                  <td>{i.last}</td>
                  <td>{i.mobile}</td>
                  <td>{i.email}</td>
                  <td>
                    <AiFillDelete
                      color="red"
                      cursor={"pointer"}
                      onClick={() => deleteHandler(i._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(Customers);
