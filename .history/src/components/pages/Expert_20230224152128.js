import React from 'react'
import { Button } from 'react-bootstrap'
import HOC from '../layout/HOC'

const Expert = () => {
  return (
   <>
   <div >
   <p>Our Experts</p>
    <Button >Add Experts</Button>
   </div>
   </>
  )
}

export default HOC(Expert)