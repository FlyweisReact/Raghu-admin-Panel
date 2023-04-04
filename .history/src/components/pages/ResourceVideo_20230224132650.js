import React from 'react'
import { Button } from 'react-bootstrap'

const ResourceVideo = () => {
  return (
    <>
        <p>Resource Video</p>
        <div>
        <video width="700" height="240" controls>
            <source src={"https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div>
            <Button>Edit</Button>
          </div>
        </div>
    </>
  )
}

export default (ResourceVideo)