import { useState } from 'react';
import { UnControlled as CodeMirrorEditor } from "react-codemirror2";

import './style.css'

function Editor (props) {
console.log('where the magic happens');

const [code, setCode] = useState("");

// const handleEditorDidMount = (editor) => {
//     setEditorRef(editor);
//   };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        fontSize: `16px`,
        overflowY: "auto",
      }}
    >
      <CodeMirrorEditor
        onChange={(editor, data, value) => {
          setCode(value)
        //   setCount(count + 1);
        //   console.log(count);
        }}
        autoScroll
        options={{
          theme: "monokai",
          lineWrapping: true,
          smartIndent: true,
          lineNumbers: true,
          foldGutter: true,
          tabSize: 2,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          autoCloseTags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          extraKeys: {
            "Ctrl-Space": "autocomplete",
          },
        }}
        editorDidMount={(editor) => {
          props.setEditorRef(editor);
          editor.setSize("100dvw", "100%");
          // todo: only the first person open this doc will result in preloading the file
        //   setCode(props.preload);
        }}
      />
    </div>
  );
}


export default Editor;