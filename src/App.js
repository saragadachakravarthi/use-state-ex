import React, { useState} from "react";
import './index.css'
 
export default function Counter() {
let [counter,updateCounter]=useState(0)
function update(){
    updateCounter(counter+1);
}
function reduce(){
  updateCounter(counter-1)
}
  return (
    <div className="main-container"> 
    <div className="sec-main">        <center className="counter">{counter}</center></div>
    <div>
        <button className="button" onClick={update}>Click</button>
        <button className="button1" onClick={reduce} >Click</button>
       </div> 
    </div>
  )
}
