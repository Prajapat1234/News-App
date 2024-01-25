
import React from 'react'

import "./Demo2.css"

export default function Demo2(props) {
  return (
    <> 
    <div id='Demo2' style={{backgroundColor:props.color}}>

       <img src="https://e7.pngegg.com/pngimages/682/859/png-clipart-tom-and-jerry-tom-and-jerry.png"/>
      
      <br/>

      <h2>{props.pname}</h2>

      <p>this is best product</p>

      <p>{props.c} </p>


      <button onClick={()=>props.add()}>Add</button>

    </div>

    </>
  )
}
