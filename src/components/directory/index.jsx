import { useState } from 'react';
import './style.css'

function Directory (props) {
  function setFile(file) {
    console.log(file);
    props.setCurrentFile(file);
  }

  return (
    <>
                <div id="dir-div">
                <h5 id="dir-heading">File Directory</h5>
                <ul>
                    <li style={{color:"white", cursor: "pointer"}} onClick={() => setFile("A")}>File A</li>
                    <li style={{color:"white", cursor: "pointer"}} onClick={() => setFile("B")}>File B</li>
                    <li>file</li>
                    <li>file</li>
                </ul>
                </div>
    </>
  )
}

export default Directory;