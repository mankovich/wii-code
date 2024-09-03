import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import {useState, useEffect, useRef} from 'react';
import Directory from '../directoryView';
import EditorsList from '../editorsList';
import Editor from '../editor';

function App() {
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

export default App;