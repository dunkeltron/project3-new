import React from "react";

import{UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/css/css.js');
function Editor(props) {
  return (
    <div className="col-md-3 border border-secondary editor">
        <CodeMirror
            value='<h1>I ♥ react-codemirror2</h1>'
            options={{
                mode: props.lang,
                theme: 'monokai',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
            }}
        />
    </div>
  );


}


export default Editor;