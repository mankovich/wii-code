import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import './style.css'

function Directory (props) {
  const [displayName, setDisplayName] = useState('')
    
  function setFile(file) {
    console.log(file);
    props.setCurrentFile(file);
    setDisplayName(file.fileName);
  }

  return (
    <>
                <div id="dir-div">
                <h5 id="dir-heading">File Directory</h5>
                <p id="current-name"><FontAwesomeIcon icon={faPenToSquare} />: {displayName}</p>
                <ul>
                {props.files.map((file) => (
                    <li key={file.id} id="file-li" onClick={() => setFile(file)}>{`${file.fileName}`}</li>
                    // <li style={{color:"white"}}>{`${file}`}</li>
                ))}
                </ul>
                </div>
    </>
  )
}

export default Directory;
