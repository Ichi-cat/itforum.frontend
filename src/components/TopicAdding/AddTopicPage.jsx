import React, {useState} from 'react';
import {EditorState} from 'draft-js';
import Editor from "../Editor/Editor";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../App.css';
import {Field, Form, Formik} from "formik";
import {stateToMarkdown} from "draft-js-export-markdown";
import {topicAPI} from "../../services/topicApi";
import {useSelector} from "react-redux";

const TopicEditor = () => {
    const [setTopic, {status}] = topicAPI.useSetTopicMutation();
    const accessToken = useSelector((state) => state.auth.token);
    const onSubmit = (values, {setSubmitting}) => {
        const markdown = stateToMarkdown(
            editorState.getCurrentContent()
        )
        console.log(values);
        console.log(markdown);
        setTopic({accessToken, name:values.TopicNameInput, content:markdown, attachmentsId:[],
            tagsNames:values.TagsInput.split(";")});
        setSubmitting(false);
    }
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    return (
        <div className="App">
            <Formik
                initialValues={{
                    TopicNameInput: "",
                    TagsInput: ""
                }} onSubmit={onSubmit}>
                {({isSubmitting}) => (<Form className="container text-center" autoComplete="off" noValidate>
                    <div className="row justify-content-md-center">
                        <div className="col-8">
                            <div className="card mt-2">
                                <div className="card-header">
                                    <Field type="text" name="TopicNameInput" className="form-control"
                                           placeholder="Name your post"/>
                                </div>
                                <div className="card-body">
                                    <div id="root"></div>
                                    <Editor editorState={editorState} setEditorState={setEditorState}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card mt-2 h-50">
                                <Field type="text" name="TagsInput" className="form-control"
                                       placeholder="Enter tags"/>
                            </div>
                            <div className="card mt-2 h-30">
                                <Field type="file" name="FileInput" className="form-control"
                                       placeholder="Enter tags"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Next
                        </button>
                    </div>
                </Form>)}
                    </Formik>
                    </div>
                    )
                }
                export default TopicEditor;