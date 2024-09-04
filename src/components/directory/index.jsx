import { useState } from 'react';
import './style.css'

function Directory (props) {
  function setFile(file) {
    console.log(file);
    props.setCurrentFile(file);
  }

  return (
    <>
      <h5 style={{color:"white"}}>File directory</h5>
      <p style={{color:"white"}} onClick={() => setFile("A")}>File A</p>
      <p style={{color:"white"}} onClick={() => setFile("B")}>File B</p>
    </>
  )
}

export default Directory;