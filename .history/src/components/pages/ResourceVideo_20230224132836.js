import React from 'react'
import { Button } from 'react-bootstrap'
import HOC from '../layout/HOC'

const ResourceVideo = () => {
  return (
    <>
        <p style={{color : 'black' , fontSize : '2rem'}}>Resource Video</p>

        <div style={{width : '700px' ,height : '300px'}}>
        <video width="100%" height="240" controls>
            <source src={"https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div>
            <Button style={{width : '100%' , marginTop : ''}}>Edit</Button>
          </div>
        </div>
    </>
  )
}

export default HOC(ResourceVideo)