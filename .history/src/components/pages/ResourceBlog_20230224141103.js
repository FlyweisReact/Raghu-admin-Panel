/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button , Modal } from "react-bootstrap";
import HOC from "../layout/HOC";

const ResourceBlog = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [ edit , setEdit ] = useState(false)

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
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
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
    <div style={{display : 'flex' , justifyContent : 'space-between'}}>
    <p style={{ color: "black", fontSize: "2rem" }}>Resources Blogs</p>
    <Button variant='outline-success' style={{height : '50px'}}>Add Blog+</Button>
    </div>

      <div className="blogs">
        {data.map((i, index) => (
          <div key={index}>
            <img src={i.image} alt="" />
            <p> <span style={{fontWeight : 'bold'}}>Description : </span>  {i.desc.substring(0, 100) + "..."} </p>
            <p> <span style={{fontWeight : 'bold'}}>Date</span> {i.date} </p>
            <Button style={{width : '80%' , display : 'block' , margin : 'auto' , marginTop : '5px'}} variant='outline-info'>View</Button>
            <Button style={{width : '80%' , display : 'block' , margin : 'auto' , marginTop : '5px'}} variant='outline-danger'>Delete</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HOC(ResourceBlog);
