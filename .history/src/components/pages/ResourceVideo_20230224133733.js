/** @format */

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import HOC from "../layout/HOC";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const ResourceVideo = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [video, setVideo] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/videos"
      );
      setVideo(data.data.video);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {

    const [ videourl , setVideoUrl ] = useState("")
    const [ videolink , setVideoLink ] = useState("")

    const ViedoUpload = (e) => {
        const data = new FormData();
        data.append("file", videolink);
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


      const postData = async (e) => {
        e.preventDefault()
        try{
                const { data } = await axios.post
        }catch(err){
            console.log(err)
        }
      }


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Edit Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <p style={{ color: "black", fontSize: "2rem" }}>Resource Video</p>

      <div style={{ width: "700px", height: "300px" }}>
        <video width="100%" height="240" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <Button style={{ width: "100%", marginTop: "20px" }} 
          onClick={() => setModalShow(true)}
          >Edit</Button>
        </div>
      </div>
    </>
  );
};

export default HOC(ResourceVideo);
