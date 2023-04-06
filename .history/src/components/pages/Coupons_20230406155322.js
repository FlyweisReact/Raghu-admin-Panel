import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import axios from "axios";

import HOC from '../layout/HOC'

const Coupons = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/coupon"
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
 
      const postHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/trade",
            
          );
          console.log(data);
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
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Coupon Code </Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
           
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Activation Date </Form.Label>
                <Form.Control type="date"  />
              </Form.Group>
           
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Expiration Date </Form.Label>
                <Form.Control type="date"  />
              </Form.Group>
           
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Discount </Form.Label>
                <Form.Control type="number"  />
              </Form.Group>
           
  
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
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
              All Coupon
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
                  <th>Code</th>
                  <th>Discount</th>
                  <th> Expiration Date </th>
                  <th> Activation Date </th>
                  <th> Count </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td>{i.code}</td>
                    <td>{i.discount}</td>
                    <td>{i.expirationDate}</td>
                    <td>{i.activationDate}</td>
                    <td>{i.count}</td>
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

export default HOC(Coupons)