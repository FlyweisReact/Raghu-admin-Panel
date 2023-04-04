/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const ResourceBlog = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [single, setSingle] = useState([]);

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

  const singleBlog = async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog/get/${id}`
      );
      setSingle(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    if (modalShow === true) {
      singleBlog();
    }
  }, [modalShow]);

  function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const postBLog = async (e) => {
      e.preventDefault()
      try {
        const { data } = await axios.post(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog",
          { image: imageUrl, desc, date }
        );
        console.log(data);
        fetchData();
        props.onHide();
        toast.success("Blog Added");
      } catch (err) {
        console.log(err);
      }
    };

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
                src={single.image}
                alt=""
                style={{
                  width: "400px",
                  height : '300px',
                }}
              />
              <p style={{ color: "black" }}>
                <span style={{ fontWeight: "bold" }}>Date : </span>
                {single.date}
              </p>

              <p style={{ color: "black" }}>
                <span style={{ fontWeight: "bold" }}>Description : </span>{" "}
              {single.desc}
              </p>
            </Container>
          ) : (
            <Form onSubmit={postBLog}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Description"
                  className="mb-3"
                  onClick={() => postDetails()}
                  onChange={(e) => setDesc(e.target.value)}
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog/delete/${id}`
      );
      fetchData();
      console.log(data);
      toast.success("Blog Deleted");
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
                setId(i._id);
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
              onClick={() => deleteHandler(i._id)}
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
