import { useState, useEffect, useRef } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link, useParams } from 'react-router-dom';

import { CodemirrorBinding } from "y-codemirror";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import RandomColor from "randomcolor";

import CreateFile from '../components/createFile/index.jsx'
// import CreateFolder from '../components/createFolder/index.jsx'
import UploadFile from '../components/uploadFile/index.jsx'
import Directory from '../components/directory/index.jsx'
import EditorsList from '../components/editorsList/index.jsx'
import Editor from '../components/editor/index.jsx'
import RenderBtn from '../components/renderBtn/index.jsx'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
// import './style.css'

// props
// projectName = roomName
// ProjectID
// room password
// username from token?
function EditorPage(props) {
  const [EditorRef, setEditorRef] = useState(null);
  const [inRoomUsers, setInRoomUsers] = useState([]);
  const [directory, setDirectory] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);
  // const [editorBinding, setBinding] = useState(null);
  // const [awareness, setAwareness] = useState(null);
  // const [UndoManager, setUndoManager] = useState(null);
  // const [yMap, setYMap] = useState(null);
  const ydoc = useRef(new Y.Doc());
  const provider = useRef(null);
  const awareness = useRef(null);
  const editorBinding = useRef(null);
  const undoManager = useRef(null);
  const yMapRef = useRef(null);


  // Yjs document that holds shared data 
  // const ydoc = new Y.Doc();
  useEffect(() => {

    const yMap = ydoc.current.getMap(props.roomname || "wii");
    yMap.observe((event) => {
      event.changes.keys.forEach((change, key) => {
        if (change.action === 'add') {
          console.log(`Property "${key}" was added. Initial value: "${yMap.get(key)}".`)
        } else if (change.action === 'update') {
          console.log(`Property "${key}" was updated. New value: "${yMap.get(key)}". Previous value: "${change.oldValue}".`)
        } else if (change.action === 'delete') {
          console.log(`Property "${key}" was deleted. Previous value: "${change.oldValue}".`)
        }
      })
    });
    const docA = new Y.Text()
    // Set initial content with the headline being the index of the documentList
    docA.applyDelta([{ insert: `Document A` }])
    console.log("Setting A into Map")
    yMap.set("A", docA);
    const docB = new Y.Text()
    // Set initial content with the headline being the index of the documentList
    docB.applyDelta([{ insert: `Document B` }])
    console.log("Setting B into Map")
    yMap.set("B", docB);
    yMapRef.current = yMap;


    // Awareness protocol is used to propagate your information (cursor position , name , etc)

    // const color = RandomColor();
    // awareness.setLocalStateField("user", {
    //     name: props.username || "user"+color,
    //     color: color,
    // });

    // // getting all users from the awareness, this is to show all users in the room view. 
    // awareness.on('update', () => {
    //     const users = (Array.from(awareness.getStates().values())).map((user) => user.user);
    //     setInRoomUsers(users);
    //     console.log(inRoomUsers);
    // })

    // Undomanager used for stacking the undo and redo operation for yjs
    undoManager.current = new Y.UndoManager(yMap);

  }, [])


  // Yjs based real-time connection and collaboration 
  useEffect(() => {
    // Collboration and connection starts after the editor is mounted
    console.log("EditorRef useEffect");
    if (EditorRef) {

      try {
        // syncs the ydoc throught WebRTC connection
        provider.current = new WebrtcProvider(
          props.roomname || "wii",
          ydoc.current,
          {
            signaling: [
              import.meta.env.VITE_WSS,
            ],
          }
        );
        console.log("provider: ", provider.current);
        // Define a shared text type on the document
        // const yText = ydoc.getText("codemirror");
        // setYMap(ydoc.getMap(props.roomname || "ninja3"));

        // logs for any changes in yMap
        // yMap.observe((event) => {
        //   event.changes.keys.forEach((change, key) => {
        //     if (change.action === 'add') {
        //       console.log(`Property "${key}" was added. Initial value: "${yMap.get(key)}".`)
        //     } else if (change.action === 'update') {
        //       console.log(`Property "${key}" was updated. New value: "${yMap.get(key)}". Previous value: "${change.oldValue}".`)
        //     } else if (change.action === 'delete') {
        //       console.log(`Property "${key}" was deleted. Previous value: "${change.oldValue}".`)
        //    }
        //   })
        // });

        // const docA = new Y.Text()
        // // Set initial content with the headline being the index of the documentList
        // docA.applyDelta([{ insert: `Document A` }])
        // yMap.set("A", docA);
        // const docB = new Y.Text()
        // // Set initial content with the headline being the index of the documentList
        // docB.applyDelta([{ insert: `Document B` }])
        // yMap.set("B", docB);


        // Awareness protocol is used to propagate your information (cursor position , name , etc)
        awareness.current = provider.current.awareness;
        const color = RandomColor();
        awareness.current.setLocalStateField("user", {
          name: props.username || "user" + color,
          color: color,
        });
        console.log("awareness.current: ", awareness.current);
        // getting all users from the awareness, this is to show all users in the room view. 
        awareness.current.on('update', () => {
          const users = (Array.from(awareness.current.getStates().values())).map((user) => user.user);
          console.log("users: ", users);
          setInRoomUsers(users);
          console.log(inRoomUsers);
        })

        // // Undomanager used for stacking the undo and redo operation for yjs
        // setUndoManager(new Y.UndoManager(yMap));

        // Binds the Codemirror editor to Yjs text type
        console.log(ydoc.current);
        editorBinding.current = new CodemirrorBinding(yMapRef.current.get("A"), EditorRef, awareness.current, { yUndoManager: undoManager.current });

      } catch (err) {
        alert(err + " error in collaborating try refreshing or come back later !");
      }
      return () => {
        //Releasing the resources used and destroying the document
        if (provider.current) {
          provider.current.disconnect();
          ydoc.current.destroy();
        }
      };
    }
  }, [EditorRef]);

  useEffect(() => {
    if (currentFile) {
      // destory binding
      editorBinding.current.destroy();
      // create new binding
      console.log("new binding ", currentFile);
      editorBinding.current = new CodemirrorBinding(yMapRef.current.get(currentFile), EditorRef, awareness.current, { yUndoManager: undoManager.current });
    }
  }, [currentFile]);

  return (
    <>
      <>
        <Container fluid id="editor-page-container">
          <Row>
            <Col xs={5} sm={4} md={3} xl={2} id="ed-left-panel" className="position-fixed top-55 start-0">
              <Stack gap={3}>
                <Stack direction="horizontal" gap={3}>
                  <div >
                    <CreateFile />
                  </div>
                  {/* <div className="ms-auto" >
                  <CreateFolder />
                </div> */}
                  <div className="ms-auto" >
                    <UploadFile />
                  </div>
                </Stack>
                <Directory setCurrentFile={setCurrentFile} />
                <div id="render-btn-div">
                  <RenderBtn />
                </div>
                <EditorsList users={inRoomUsers} />
              </Stack>
            </Col>
            <Col xs={7} sm={8} md={9} xl={10} className="position-absolute top-55 end-0">
              <Editor editorRef={EditorRef} setEditorRef={setEditorRef} />

            </Col>
          </Row>
        </Container>
      </>
    </>
  )

}

export default EditorPage;

