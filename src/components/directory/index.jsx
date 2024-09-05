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
                {props.files.map((file) => (
                    <li key={file} style={{color:"white"}} onClick={() => setFile(file)}>{`${file}`}</li>
                    // <li style={{color:"white"}}>{`${file}`}</li>
                ))}
                </ul>
                </div>
    </>
  )
}

export default Directory;