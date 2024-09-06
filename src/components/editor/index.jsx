import { useState } from 'react';
import { UnControlled as CodeMirrorEditor } from "react-codemirror2";

import './style.css'
// import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";

function Editor (props) {

  const mode = `text/${props.fileType}`;
  console.log("mode: ", mode);

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
        // onChange={(editor, data, value) => {
        //   setCode(value)
        // //   setCount(count + 1);
        // //   console.log(count);
        // }}
        autoScroll
        options={{
          mode: mode,
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
        }}
      />
    </div>
  );
}


export default Editor;