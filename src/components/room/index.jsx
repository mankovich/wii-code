import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import {useState, useEffect, useRef} from 'react';
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import RandomColor from "randomcolor";
import Directory from '../directoryView';
import EditorsList from '../editorsList';
import Editor from '../editor';

function Room() {
  return (
    <div className="container-fluid h-100"> 
      <div className="row h-100"> 
        <nav className="col-2 bg-light h-100"> 
          <div className="h-50"> 
            <Directory /> 
          </div>
          <div className="h-50"> 
            <EditorsList />
          </div>
        </nav>

        <main className="col-10">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default Room;



// import React, { useEffect, useContext, useRef, useState } from "react";
// import { CodemirrorBinding } from "y-codemirror";
// import { UnControlled as CodeMirrorEditor } from "react-codemirror2";
// import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";
// import RandomColor from "randomcolor";
// import "./editor.css";


// export function Editor(props) {
//   const [EditorRef, setEditorRef] = useState(null);
//   const [code, setCode] = useState("");
//   const [count, setCount] = useState(0);
  


//   // Setting the editor reference when editor gets mounted
//   const handleEditorDidMount = (editor) => {
//     setEditorRef(editor);
//   };

//   // Yjs based real-time connection and collaboration 
//   useEffect(() => {
//     // Collboration and connection starts after the editor is mounted
//     if (EditorRef) {
//       // Yjs document that holds shared data 
//       const ydoc = new Y.Doc();

//       let provider = null;
//       try {
//         // syncs the ydoc throught WebRTC connection
//         provider = new WebrtcProvider(
//           props.roomname ||"ninja3",
//           ydoc,
//           {
//             signaling: [
//                 import.meta.env.VITE_WSS,
//             ],
//           }
//         );
//         // Define a shared text type on the document
//         const yText = ydoc.getText("codemirror");
//         console.log("string: ",yText.toString() );
//         console.log("JSON: ",yText.toJSON() );
//         console.log("Delta: ",yText.toDelta() );
//         yText.observe(() => {
//             console.log("string: ",yText.toString() );
//             console.log("JSON: ",yText.toJSON() );
//             console.log("Delta: ",yText.toDelta() );
//         })

//         // Undomanager used for stacking the undo and redo operation for yjs
//         const yUndoManager = new Y.UndoManager(yText);

//         const awareness = provider.awareness;

//         // Awareness protocol is used to propagate your information (cursor position , name , etc)
//         const color = RandomColor();
//         awareness.setLocalStateField("user", {
//           name: props.username || "user"+color,
//           color: color,
//         });

//         awareness.on('update', updates => {
//             // todo getting all users from the awareness, this is to show all users in the room views. 
//             const users = (Array.from(awareness.getStates().values())).map((user) => user.user);
//             // users.forEach((user) => console.log(user.name));
//             // todo: return users to a setState from the room component 
//           })

//         // Binds the Codemirror editor to Yjs text type
//         const getBinding = new CodemirrorBinding(yText, EditorRef, awareness, {
//           yUndoManager,
//         });
//         console.log("string: ",yText.toString() );
//         console.log("JSON: ",yText.toJSON() );
//         console.log("Delta: ",yText.toDelta() );


//         // todo set the default value.  pending removal and replaced with the new algorithm.
//         // EditorRef.setValue(code);
//       } catch (err) {
//         alert(err + " error in collaborating try refreshing or come back later !");
//       }
//       return () => {
//         //Releasing the resources used and destroying the document
//         if (provider) {
//           provider.disconnect();
//           ydoc.destroy();
//         }
//       };
//     }
//   }, [EditorRef]);

//     // todo: Preload the code in the editor
//     // useEffect(() => {
//     //     console.log(props.preload);
//     //     console.log(EditorRef);
//     //     if (props.preload && EditorRef) {
//     //       setCode(props.preload);
//     //       EditorRef.setValue(props.preload);
//     //     }
//     //     console.log("preloaded");
//     //   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100%",
//         width: "100%",
//         fontSize: `16px`,
//         overflowY: "auto",
//       }}
//     >
//       <CodeMirrorEditor
//         onChange={(editor, data, value) => {
//           setCode(value)
//         //   setCount(count + 1);
//         //   console.log(count);
//         }}
//         autoScroll
//         options={{
//           theme: "monokai",
//           lineWrapping: true,
//           smartIndent: true,
//           lineNumbers: true,
//           foldGutter: true,
//           tabSize: 2,
//           gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
//           autoCloseTags: true,
//           matchBrackets: true,
//           autoCloseBrackets: true,
//           extraKeys: {
//             "Ctrl-Space": "autocomplete",
//           },
//         }}
//         editorDidMount={(editor) => {
//           handleEditorDidMount(editor);
//           editor.setSize("90dvw", "100%");
//           // todo: only the first person open this doc will result in preloading the file
//         //   setCode(props.preload);
//         }}
//       />
//     </div>
//   );
// }
