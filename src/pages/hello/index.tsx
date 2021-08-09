import React, { Component } from "react"
import { UnControlled as CodeMirror } from "react-codemirror2"
import 'codemirror/lib/codemirror.css'
import 'codemirror/lib/codemirror'

import { getEditorCode } from "@/services/getData"

export default class hello extends Component {
  constructor(props) {
    super(props)
    this.state={
      code: ''
    }
    getEditorCode().then((res)=>{
      this.setState({
        code: res?.data.code
      })
    })
  }
  
  render(){
    return (
      <CodeMirror
        value={this.state.code}
        options={{
          lineNumbers: true,
          mode: { name: 'text/javascript' },
          extraKeys: { "Ctrl": "autocomplete" },
          autofocus: true,
          styleActiveLine: true,
        }}
        // onBeforeChange={(editor, data, value) => {
        //   this.setState({value});
        // }}
        onChange={(editor, data, value) => {
          console.log(editor,data,value);
        }}
      />
    )
  }
  
}
