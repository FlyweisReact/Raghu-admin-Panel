/** @format */

import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { toast } from "react-toastify";
import axios from "axios";

import HOC from "../layout/HOC";

const TrendingCourse = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/trade"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [image, setImageUrl] = useState("");
    const [ uploadStatus , setUploadStatus] = useState(false)

    const postDetails = (e) => {
      setUploadStatus(true)
      const data = new FormData();
      data.append("file", e.target.value);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImageUrl(data.url);
          console.log(data?.url);
          setUploadStatus(false)
        })
        .catch((err) => {
          console.log(err);
          setUploadStatus(false)
        });
        setUploadStatus(false)
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/trade" , {name , image })
        console.log(data)
        toast.success("Added");
        fetchData();
        setModalShow(false);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Trading Courses
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
            onSubmit={postHandler}
          >
          {}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Course Image</Form.Label>
              <Form.Control type="text" onChange={() => postDetails()} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const data = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5002/api/terms/terms/${id}`
      );
      console.log(data);
      toast.success("Deleted");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Trending Courses
            <hr style={{ width: "70%" }} />
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add
          </Button>
        </div>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Image</th>
                <th>Title</th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {data?.message?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td>
                    <img src={i.image} alt="" style={{ width: "100px" }} />
                  </td>
                  <td>{i.name}</td>

                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(TrendingCourse);
