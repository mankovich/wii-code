import { useState, useEffect, useRef} from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link, useParams } from 'react-router-dom';

import { CodemirrorBinding } from "y-codemirror";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import RandomColor from "randomcolor";
import axios from "axios";

import CreateFile from '../components/createFile/index.jsx'
import CreateFolder from '../components/createFolder/index.jsx'
import UploadFile from '../components/uploadFile/index.jsx'
import Directory from '../components/directory/index.jsx'
import EditorsList from '../components/editorsList/index.jsx'
import Editor from '../components/editor/index.jsx'
import RenderBtn from '../components/renderBtn/index.jsx'
import saveFile from '../utils/files.js'

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
    const [directory, setDirectory] = useState(null);
    const [currentFile, setCurrentFile] = useState(null);
    // const [filesList, setFilesList] = useState([]]);
    const ydoc = useRef(new Y.Doc());
    const provider = useRef(null);
    const awareness = useRef(null);
    const editorBinding = useRef(null);
    const undoManager = useRef(null);
    const yMapRef = useRef(null);
    const files = useRef([]);


    const { roomId } = useParams(); 

    // Yjs document that holds shared data 
    // const ydoc = new Y.Doc();
    useEffect(() =>{
      if (!directory) {
        axios.get(`${import.meta.env.VITE_SERVER}/api/project/1/${roomId}`,
            {headers: { Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtva29Aa29rby5jb20iLCJpYXQiOjE3MjU1NzEwMzAsImV4cCI6MTcyNTU3ODIzMH0.7U80cRY_i6FzTRH1qNi9UxsJd3mFEE4I6uU6AvhnrAE` }}
        )
        .then((res) => {
            console.log("Get directory: ", res.data[0].files);
            setDirectory(res.data[0].files);
        }).catch((err) => {
                console.log(err);
        });
      }
    }, [])

    useEffect(() => {
      if (directory) {
        const yMap = ydoc.current.getMap("room" + roomId);


        directory.forEach((file) => {
          const temp = new Y.Text();
          temp.applyDelta([{ insert: file.content }]);
          yMap.set(file.fileName, temp);
          files.current.push({fileName: file.fileName, id: file.ID});
        })
        yMapRef.current = yMap;

    
        // Undomanager used for stacking the undo and redo operation for yjs
        undoManager.current = new Y.UndoManager(yMapRef.current);

        try {
            // syncs the ydoc throught WebRTC connection
            provider.current = new WebrtcProvider(
              "room" + roomId,
              ydoc.current,
              {
                signaling: [
                    import.meta.env.VITE_WSS,
                ],
              }
            );
            console.log("provider: ", provider.current);

            // Awareness protocol is used to propagate your information (cursor position , name , etc)
            awareness.current = provider.current.awareness;
            const color = RandomColor();
            awareness.current.setLocalStateField("user", {
                name: props.username || "user"+color,
                color: color,
            });
            console.log("awareness.current: ", awareness.current);
            // getting all users from the awareness, this is to show all users in the room view. 
            awareness.current.on('change', () => {
                const users = (Array.from(awareness.current.getStates().values())).map((user) => user.user);
                console.log("awareness received something");
                setInRoomUsers(users);
                files.current.forEach((file) => {
                    saveFile(file.id, yMapRef.current.get(file.fileName).toString());
                });
            })

            // yMapRef.current.observe((event) => {
            //     event.changes.keys.forEach((change, key) => {
            //       if (change.action === 'add') {
            //         console.log(`Property "${key}" was added. Initial value: "${yMapRef.current.get(key)}".`)
            //       } else if (change.action === 'update') {
            //         console.log(`Property "${key}" was updated. New value: "${yMapRef.current.get(key)}". Previous value: "${change.oldValue}".`)
            //       } else if (change.action === 'delete') {
            //         console.log(`Property "${key}" was deleted. Previous value: "${change.oldValue}".`)
            //       }
            //     })
            //   });

            console.log("binding ",files.current[0]);
            console.log(yMapRef.current.get(files.current[0].fileName).toString());
            editorBinding.current = new CodemirrorBinding(yMapRef.current.get(files.current[0].fileName), EditorRef, awareness.current, {yUndoManager: undoManager.current});
            // setCurrentFile(files.current[0]);
          } catch (err) {
            alert(err + " error in initializing!");
          }
        }
    }, [directory])


    useEffect(() =>{
      if (currentFile) {
        // destory binding
      editorBinding.current.destroy();
      // create new binding
      console.log("new binding ", currentFile);
      editorBinding.current = new CodemirrorBinding(yMapRef.current.get(currentFile.fileName), EditorRef, awareness.current, {yUndoManager: undoManager.current});
      }
    }, [currentFile]);
 
    return (
        <>
    <>
      <Container fluid id="editor-page-container">
        <Row>
          <Col xs={5} sm={4} md={3} xl={2} id="ed-left-panel" className="position-fixed top-55 start-0">
            <Stack gap={3}>
              <Stack direction="horizontal" gap={1}>
                <div >
                  <CreateFile projectId={roomId} directory={directory} setDirectory={setDirectory}/>
                </div>
                <div className="ms-auto" >
                  <CreateFolder />
                </div>
                <div className="ms-auto" >
                  <UploadFile />
                </div>
              </Stack>
              <Directory files={files.current} setCurrentFile={setCurrentFile} />
              <RenderBtn saveFile={saveFile} files={files.current} yMapRef={yMapRef.current} projectId={roomId} />
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