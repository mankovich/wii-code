import { useState, useEffect, useContext, createContext } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link, useParams } from 'react-router-dom';

import { CodemirrorBinding } from "y-codemirror";
import { UnControlled as CodeMirrorEditor } from "react-codemirror2";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import RandomColor from "randomcolor";

import CreateFile from '../components/createFile/index.jsx'
import CreateFolder from '../components/createFolder/index.jsx'
import UploadFile from '../components/uploadFile/index.jsx'
import Directory from '../components/directory/index.jsx'
import EditorsList from '../components/editorsList/index.jsx'
import Editor from '../components/editor/index.jsx'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
// import './style.css'

// props
// projectName = roomName
// ProjectID
// room password
// username from token?
function EditorPage(props) {
  console.log('editorPage prop: ', props ?? 'no props')
  const [EditorRef, setEditorRef] = useState(null);
  const [inRoomUsers, setInRoomUsers] = useState([]);
  const [directory, setDirectory] = useState([]);
  const [currentFile, setCurrentFile] = useState('');

  // Yjs based real-time connection and collaboration 
  useEffect(() => {
    // Collboration and connection starts after the editor is mounted
    if (EditorRef) {
      // Yjs document that holds shared data 
      const ydoc = new Y.Doc();

      let provider = null;
      try {
        // syncs the ydoc throught WebRTC connection
        provider = new WebrtcProvider(
          props.roomname || "ninja3",
          ydoc,
          {
            signaling: [
              import.meta.env.VITE_WSS,
            ],
          }
        );
        // Define a shared text type on the document
        const yText = ydoc.getText("codemirror");

            yText.observe(() => {
                console.log("string: ",yText.toString() );
                console.log("JSON: ",yText.toJSON() );
                console.log("Delta: ",yText.toDelta() );
            })
    
            // Undomanager used for stacking the undo and redo operation for yjs
            const yUndoManager = new Y.UndoManager(yText);
    
            const awareness = provider.awareness;
    
            // Awareness protocol is used to propagate your information (cursor position , name , etc)
            const color = RandomColor();
            awareness.setLocalStateField("user", {
              name: props.username || "user"+color,
              color: color,
            });
    
            // getting all users from the awareness, this is to show all users in the room views. 
            awareness.on('update', () => {
                const users = (Array.from(awareness.getStates().values())).map((user) => user.user);
                setInRoomUsers(users);
                console.log(inRoomUsers);
              })
    
            // Binds the Codemirror editor to Yjs text type
            const getBinding = new CodemirrorBinding(yText, EditorRef, awareness, {
              yUndoManager,
            });



        // todo set the default value.  pending removal and replaced with the new algorithm.
        // EditorRef.setValue(code);
      } catch (err) {
        alert(err + " error in collaborating try refreshing or come back later !");
      }
      return () => {
        //Releasing the resources used and destroying the document
        if (provider) {
          provider.disconnect();
          ydoc.destroy();
        }
      };
    }
  }, [EditorRef]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Stack gap={1}>
              <Stack direction="horizontal" gap={2}>
                <div >
                  <CreateFile />
                </div>
                <div className="ms-auto" >
                  <CreateFolder />
                </div>
                <div className="ms-auto" >
                  <UploadFile />
                </div>
              </Stack>
              <Directory />
              <EditorsList users= {inRoomUsers} />
            </Stack>
          </Col>
          <Col xs={9}>
            <Editor editorRef={EditorRef} setEditorRef={setEditorRef} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditorPage;

