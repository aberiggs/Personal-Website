import styled from 'styled-components'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import api from '../../api'

import PostPreview from './MarkdownDisplay'


const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const EditingSide = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 40%;
`

const PostDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    font-size: 20px;
    width: 100%;
    margin: 5vmin;
    padding: 5vmin;
`

const MarkdownEditor = props => {
    const [postName, setPostName] = useState("")
    const [postSummary, setPostSummary ] = useState("")
    const [markdown, setMarkdown] = useState("")

    //TODO: Char limit for title and whatnot
    return (
        <MainDiv>
            <EditingSide>
                <h1>Create Post!</h1>
                <p>Title:<input type="text" onChange={e => setPostName(e.target.value)}/></p>
                <textarea onChange={e => setPostSummary(e.target.value)} cols="50" rows="5" />
                <textarea onChange={e => setMarkdown(e.target.value)} cols="50" rows="10" />
                { (props.mode === "create") && <CreatePostButton post={{postName: postName, postSummary: postSummary, markdown: markdown}} /> }
                { (props.mode === "edit") && <EditPostButton post={{postName: postName, postSummary: postSummary, markdown: markdown}} /> }
            </EditingSide>
        
            <PostDiv>
                <PostPreview postName={postName} markdown={markdown}/>
            </PostDiv>
        </MainDiv>
    )
}



const CreatePostButton = props => {
    const navigate = useNavigate();
    

    const CreatePost = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        await api.createPost({...props.post, token}).then(() => {
            window.alert("Post created!")
            navigate("../")
        }).catch(error => {
            window.alert(error.response.data.error)
        })
        

    }

    
    return (
        <div>
            <button onClick={CreatePost}>Create Post</button>
        </div>
    )
}

const EditPostButton = props => {
    return (
        <div>
            <button>Edit Post</button>
        </div>
    )
}


export default MarkdownEditor;