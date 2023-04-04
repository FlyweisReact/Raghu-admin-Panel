/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NotifyCustomer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  const fetchhandler = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchhandler();
  }, []);

  const deleteHandler = async (levelId , courseId) => {
    try {
      const data = await axios.delete(
       `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/${levelId}/${courseId}`
      );
      console.log(data);
      toast.success("Course Deleted");
      fetchhandler();
    } catch (err) {
      console.log(err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [include, setInclude] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [video, setVideo] = useState("");
    const [price, setFakePrice] = useState("");
    const [actualprice, setActualPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [level, setLevel] = useState("");

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

    const ViedoUpload = (e) => {
      const data = new FormData();
      data.append("file", video);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/video/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setVideoUrl(data.url);
          console.log(data?.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/${id}`,
          {
            title,
            level,
            about,
            include,
            image: imageUrl,
            content,
            video: videoUrl,
            price,
            actualprice,
            discount,
          }
        );
        console.log(data);
        toast.success("Course added");
        fetchhandler();
        setModalShow(false);
      } catch (err) {
        console.log(err);
      }
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/",
          {
            title,
            level,
            about,
            include,
            image: imageUrl,
            content,
            video: videoUrl,
            price,
            actualprice,
            discount,
          }
        );
        console.log(data);
        toast.success("Course added");
        fetchhandler();
        setModalShow(false);
      } catch (err) {
        console.log(err);
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
           {edit ? ' Edit Course' : " Add Course"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {edit ? (
              <Form onSubmit={putHandler}>
                <Form.Group className="mb-3">
                  <Form.Label> Image </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Video </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setVideo(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> Title </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    onClick={() => postDetails()}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Level</Form.Label>
                  <Form.Control type='text' onChange={(e) => setLevel(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>About</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="About">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setAbout(e.target.value)}
                      onClick={() => ViedoUpload()}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Include Text </Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Include Text "
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setInclude(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Content </Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Content">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Fake Price </Form.Label>
                  <Form.Control
                    type="number"
                    min={0}
                    onChange={(e) => setFakePrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Actual Price </Form.Label>
                  <Form.Control
                    type="number"
                    min={0}
                    onChange={(e) => setActualPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Discount </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </Form.Group>

                <Button variant="outline-dark" type="submit">
                  Submit
                </Button>
              </Form>
            ) : (
              <Form onSubmit={postHandler}>
                <Form.Group className="mb-3">
                  <Form.Label> Image </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Video </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setVideo(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> Title </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    onClick={() => postDetails()}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>About</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="About">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setAbout(e.target.value)}
                      onClick={() => ViedoUpload()}
                    />
                  </FloatingLabel>
                </Form.Group>


                  <Form.Group className="mb-3">
                       <Form.Select aria-label="Default select example">
      <option>--Select Your Prefrence--</option>
      <option value="1">beginner</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                  </Form.Group>


                <Form.Group className="mb-3">
                  <Form.Label>Include Text </Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Include Text "
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setInclude(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Content </Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Content">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Discounted Price </Form.Label>
                  <Form.Control
                    type="number"
                    min={0}
                    onChange={(e) => setFakePrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Actual Price </Form.Label>
                  <Form.Control
                    type="number"
                    min={0}
                    onChange={(e) => setActualPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Discount </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </Form.Group>

                <Button variant="outline-dark" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

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
            All Courses
            <hr style={{ width: "70%" }} />
          </span>
          <Button
            style={{
              backgroundColor: "#4099ff",
              color: "#fff",
              borderRadius: "0",
              border: "1px solid #4099ff",
              padding: "10px",
            }}
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add Course
          </Button>
        </div>

        <div
          style={{
            overflowX: "auto",
            padding: "10px",
            width: "100%",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th> Title </th>
                <th>Discounted Price </th>
                <th>Actual Price </th>
                <th>Discount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i) =>
                i.levels.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "120px" }}
                      />
                    </td>
                    <td style={{textTransform : 'capitalize'}} > {item.title} </td>
                    <td> ${item.actualprice} </td>
                    <td> ${item.price} </td>
                    <td> {item.discount}% </td>
                    <td>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <AiFillDelete
                          color="red"
                          cursor={"pointer"}
                          onClick={() => deleteHandler(item._id , i._id)}
                        />
                        <AiFillEye
                          color="blue"
                          cursor={"pointer"}
                          onClick={() => navigate(`/pro/${i._id}/${item._id}`)}
                        />

                        <AiFillEdit
                          color="blue"
                          cursor="pointer"
                          onClick={() => {
                            setEdit(true);
                            setId(i._id);
                            setModalShow(true);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(NotifyCustomer);
