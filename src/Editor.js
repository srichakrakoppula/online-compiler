import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/java";
import "brace/theme/twilight";

class Editor extends Component {
  contructor() {
    // super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue, e) {
    console.log(newValue, e);
  }

  render() {
    return (
      <AceEditor
        placeholder=""
        mode="java"
        theme="twilight"
        name="editor_"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`class sampleProgram{
            public static void main(String args[]){
              System.out.println("Helloo");
            }
          }`}
        onChange={this.onChange}
        
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2
        }}
      />
    );
  }
}

// style={{ width: '90vw',
//             height: '80vh',
//             margin: '10vh auto 0 auto'
//         }}
export default Editor;
