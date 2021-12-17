import React from 'react'
import '../DisplayNote1/DisplayNote1.css'
import Icons from '../Icons/Icons'

function DisplayNote1({notes}) {
  

    
    return (
        <div className="container">
            <div className="title">{notes.title}</div>
            <div className="description">{notes.description}</div>
           <div className="icons" > <Icons /></div>
        </div>
      
    )
}

export default DisplayNote1