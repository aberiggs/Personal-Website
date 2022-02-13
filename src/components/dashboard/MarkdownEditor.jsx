import styled from 'styled-components'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import api from '../../api'

import MarkdownDisplay from './MarkdownDisplay'


const MarkdownEditor = props => {
    const [postName, setPostName] = useState("")
    const [postSummary, setPostSummary ] = useState("")
    const [markdown, setMarkdown] = useState("")

    //TODO: Char limit for title and whatnot
    return (
        <div class="flex w-full flex-col justify-center items-center">
             { (props.mode === "create") && <h1 class="text-zinc-100 text-8xl pb-8">Create Post</h1> }
             { (props.mode === "edit") && <h1 class="text-zinc-100 text-8xl pb-8">Edit Post</h1> }
            <div class="flex flex-row w-full py-5">
                <div class="flex flex-col items-center w-6/12 px-8">
                    <div class="flex flex-col justify-center items-center w-9/12 px-4 mx-5">
                        <h2 class="text-zinc-100 text-4xl px-8 py-5">Post Title</h2>
                        <input type="text" class="w-7/12 text-center p-3 bg-zinc-100/30 text-zinc-100 rounded-md " onChange={e => setPostName(e.target.value)}/>
                        <div class="flex-grow border border-dashed border-zinc-50 w-full my-8"></div>
                        <h2 class="text-zinc-100 text-4xl px-8 py-5">Post Summary</h2>
                        <textarea class="w-8/12 h-22 p-3 bg-zinc-100/30 text-zinc-100 rounded-md" onChange={e => setPostSummary(e.target.value)}  />
                        <div class="flex-grow border border-dashed border-zinc-50 w-full my-8"></div>
                        <h2 class="text-zinc-100 text-4xl px-8 py-5">Post Body</h2>
                        <textarea class="w-11/12 h-52 p-3 bg-zinc-100/30 text-zinc-100 rounded-md" onChange={e => setMarkdown(e.target.value)} />
                        <div class="flex-grow border border-dashed border-zinc-50 w-full my-8"></div>
                        { (props.mode === "create") && <CreatePostButton post={{postName: postName, postSummary: postSummary, markdown: markdown}} /> }
                        { (props.mode === "edit") && <EditPostButton post={{postName: postName, postSummary: postSummary, markdown: markdown}} /> }
                    </div>
                </div>
            
                <div class="flex flex-col items-center w-6/12 px-8">
                    <div class="w-full bg-zinc-100 px-4 mx-5 h-full rounded-xl">
                        <MarkdownDisplay postName={postName} markdown={markdown}/>
                    </div>
                </div>
            </div>
        </div>
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
            <button class="bg-zinc-900 hover:text-zinc-800 text-zinc-100 text-xl px-4 py-2 rounded-full" onClick={CreatePost}>Create Post</button>
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