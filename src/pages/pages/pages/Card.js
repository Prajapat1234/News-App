

import React from 'react'
import "./Card.css"
export default function Card(props) {
  return (
    <>
    <div id='main1'>
        
          <p id='title'>Title : {props.Title}</p>
          <p id='author'>Author : {props.author}</p>
          <p id='desc'>Description : {props.desc}</p>
          <a  id='btn' href={props.button}>Read more news</a>
          <img id='img' src = {props.img}/>
    </div>
    
    {/* <div id='main2'>
        
          <p id='title'>Title : {props.Title}</p>
          <p id='author'>Author : {props.author}</p>
          <p id='desc'>Description : {props.desc}</p>
          <a href={props.button}>Read more news</a>
          <img id='img' src = {props.img}/>
    </div> */}

    </>
  )
}
        
      
