import React from 'react'
import Coursedetail from './Coursedetail';

const App = () => {
  return (
       
    <Coursedetail details={{
         courseName:"java full stack",
         courseAvail:false,
         courseDuration:"3 months"
    }}/>
    
  )
}

export default App