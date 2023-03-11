import React from 'react'

const Coursedetail = (props) => {
    if(props.details.courseAvail == true)
    {   
        
        return (
            <>
            <h1>{props.details.courseName}</h1>
        <h1>{props.details.courseDuration}</h1>
            <button style={{color:"green"}}>AVAILABLE</button>
            </>
          )
    }
    else
    {
        return (
            <>
            <h1>{props.details.courseName}</h1>
        <h1>{props.details.courseDuration}</h1>
            <button style={{color:"red"}}> NOT AVAILABLE</button>
            </>
          )
    }
  
}

export default Coursedetail