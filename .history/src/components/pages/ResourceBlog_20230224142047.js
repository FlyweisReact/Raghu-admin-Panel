/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import HOC from "../layout/HOC";

const ResourceBlog = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

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

  function MyVerticallyCenteredModal(props) {

    const [ image , setImage] = useState("")
    const [ desc , setDesc] = useState("")
    const [ date , setDate] = useState("")
    const [ imageUrl , setImage]

    const postBLog = async (e) => {
        try{
            const { data } = await axios.post("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog" , {})
        }catch(err){
            console.log(err)
        }
    }

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


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "View Blog" : "Add Blog"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {edit ? (
            <Container>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4WvC5PYhh90XerR_RZXPr2mpyVzAB_f7jg&usqp=CAU"
                }
                alt=""
                style={{
                  width: "100%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <p style={{ color: "black" }}>
                <span style={{fontWeight : 'bold'}}>Date : </span> 23 feb 2023
              </p>
              
              <p style={{ color: "black" }}>
                <span style={{fontWeight : 'bold'}}>Description : </span> Researching about the company is the first and most important thing to be done right before you attend the job interview. You should know about the company where you’re interested to work. The interviewer may ask questions about the company, why you’re interested in joining their company, and how you can make a difference there with your skills and experience. Be prepared to answer these questions well in advance.
              </p>
              
            </Container>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: "2rem" }}>Resources Blogs</p>
        <Button
          variant="outline-success"
          style={{ height: "50px" }}
          onClick={() => {
            setEdit(false);
            setModalShow(true);
          }}
        >
          Add Blog+
        </Button>
      </div>

      <div className="blogs">
        {data.map((i, index) => (
          <div key={index}>
            <img src={i.image} alt="" />
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Description : </span>{" "}
              {i.desc.substring(0, 100) + "..."}{" "}
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Date</span> {i.date}{" "}
            </p>
            <Button
              style={{
                width: "80%",
                display: "block",
                margin: "auto",
                marginTop: "5px",
              }}
              variant="outline-info"
              onClick={() => {
                setEdit(true);
                setModalShow(true);
              }}
            >
              View
            </Button>
            <Button
              style={{
                width: "80%",
                display: "block",
                margin: "auto",
                marginTop: "5px",
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HOC(ResourceBlog);
