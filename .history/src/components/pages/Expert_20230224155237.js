/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button , Table ,Modal } from "react-bootstrap";
import HOC from "../layout/HOC";


const Expert = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data }= await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/experts/")
      setData(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

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
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div style={{display : 'flex' , justifyContent : 'space-between'}}>
        <p style={{ color: "black" }}>Our Experts</p>
        <Button variant='outline-success'>Add Experts</Button>
      </div>

      <Table striped bordered hover style={{marginTop : '2%'}} >
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
      {data?.data?.map((i , index) => (
        <tr key={index}>
          <td>
          <img src={i.image} alt='' style={{width :'100px'}} />
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