import React from 'react'

const ResourceVideo = () => {
  return (
    <>
        <p>Resource Video</p>
        <div>
        <video width="700" height="240" controls>
            <source src={data?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </>
  )
}

export default ResourceVideo