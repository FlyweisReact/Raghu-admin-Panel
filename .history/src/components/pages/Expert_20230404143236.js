/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Expert = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/experts/"
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
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [others, setOthers] = useState("");
    const [google, setGoogle] = useState("");

    const postDetails = (e) => {
      const data = new FormData();
      data.append("file", image);
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
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postData = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/experts",
          { image: imageUrl, name, position, facebook, twitter, others, google }
        );
        console.log(data)
        toast.success("Expert Added")
        props.onHide()
        fetchData()
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Expert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={(e) => setName(e.target.value)}
              onClick={() => postDetails()}
               />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control type="text" onChange={(e) => setPosition(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Facebook Link</Form.Label>
              <Form.Control type="text" onChange={(e) => setFacebook(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Twitter Link</Form.Label>
              <Form.Control type="text"  onChange={(e) => setTwitter(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Google Link</Form.Label>
              <Form.Control type="text"  onChange={(e) => setGoogle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instagram Link</Form.Label>
              <Form.Control type="text" onChange={(e) => setOthers(e.target.value)} />
            </Form.Group>
            <Button variant="outline-success" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>  </Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try{
      const { data } = await axios.delete(`https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/experts/
      `)
    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black" }}>Our Experts</p>
        <Button variant="outline-success" onClick={() => setModalShow(true)}>Add Experts</Button>
      </div>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
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
          {data?.data?.map((i, index) => (
            <tr key={index}>
              <td>
                <img src={i.image} alt="" style={{ width: "100px" }} />
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
