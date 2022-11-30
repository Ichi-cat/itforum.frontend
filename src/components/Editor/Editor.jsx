import React from "react";
import { stateToMarkdown } from "draft-js-export-markdown";
import {EditorState, Editor as DraftEditor} from "draft-js";
import {findAllByDisplayValue} from "@testing-library/react";
import Toolbar from "./Toolbar/Toolbar";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }
    updateEditorState(editorState) {
        const markdown = stateToMarkdown(
            this.state.editorState.getCurrentContent()
        )
        console.log(markdown/*editorState.getCurrentContent()*/);
        this.setState({editorState})
        this.props.setEditorState(editorState)
    }
    render() {
        return (
            <div className="editor-container">
                <Toolbar editorState={this.state.editorState} updateEditorState={this.updateEditorState.bind(this)}/>
                <div>
                    <DraftEditor
                        placeholder="Explore your may..."
                        editorState={this.state.editorState}
                        onChange={this.updateEditorState.bind(this)}
                    />
                </div>
                <div>
                    <p>
                        <DraftEditor readOnly={true} editorState={this.state.editorState}/>
                    </p>
                </div>
            </div>
        )
    }
}