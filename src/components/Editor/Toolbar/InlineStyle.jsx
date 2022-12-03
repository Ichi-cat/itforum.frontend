import React from "react";
import {Container, ToolbarItem} from "./common";
import {inlineStyles} from "./textStyles";
import {RichUtils} from "draft-js";

export function RenderInlineStyles(props){
    const {editorState, updateEditorState}=props;

    const applyStyle=(style)=>{
        updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
    }

    const isActive=(style)=>{
        const currentStyle=editorState.getCurrentInlineStyle();
        return currentStyle.has(style);
    }

    return <Container>
        {inlineStyles.map((item, idx)=>{
        return<ToolbarItem IsActive={isActive(item.style)} key={'$(item.label)-${idx}'} onClick={()=>applyStyle(item.style)}>
            {item.icon||item.label}
        </ToolbarItem>
        })}
    </Container>
}