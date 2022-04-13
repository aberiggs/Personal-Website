import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import api from '../../api'

import MarkdownDisplay from './MarkdownDisplay'


const MarkdownEditor = props => {
    const navigate = useNavigate();
    const params = useParams()

    const [postName, setPostName] = useState(params.postName)
    const [postSummary, setPostSummary ] = useState("")
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        if (props.mode === "edit") {
            getMarkdown()
            document.getElementById("post-name").disabled = true;
            
        }
        
    }, []);

    const getMarkdown = async () => {
        await api.getMarkdownFromPostName(params.postName).then(res => {
            setMarkdown(String(res.data.fileContent))
            setPostSummary(String(res.data.postSummary))
        }).catch(res => {
            navigate("../*")
        })
    }

    


    //TODO: Char limit for title and whatnot
    return (
        <div class="flex w-full flex-col justify-center items-center">
             { (props.mode === "create") && <h1 class="text-zinc-100 text-8xl pb-8">Create Post</h1> }
             { (props.mode === "edit") && <h1 class="text-zinc-100 text-8xl pb-8">Edit Post</h1> }
            <div class="flex flex-row w-full py-5">
                <div class="flex flex-col items-center w-6/12 px-8">
                    <div class="flex flex-col justify-center items-center w-9/12 px-4 mx-5">
                        <h2 class="text-zinc-100 text-4xl px-8 py-5">Post Title</h2>
                        <input id="post-name" type="text" value={postName} class="w-7/12 text-center p-3 bg-zinc-100/30 text-zinc-100 rounded-md " onChange={e => setPostName(e.target.value)} />
                        <div class="flex-grow border border-dashed border-zinc-50 w-full my-8"></div>
                        <h2 class="text-zinc-100 text-4xl px-8 py-5">Post Summary</h2>
                        <textarea id="post-summary" value={postSummary} class="w-8/12 h-22 p-3 bg-zinc-100/30 text-zinc-100 rounded-md" onChange={e => setPostSummary(e.target.value)}  />
                        <div class="flex-grow border border-dashed border-zinc-50 w-full my-8"></div>
                        <h2 class="text-zinc-100 text-4xl px-8 py-5">Post Body</h2>
                        <textarea id="post-markdown" value={markdown} class="w-11/12 h-52 p-3 bg-zinc-100/30 text-zinc-100 rounded-md" onChange={e => setMarkdown(e.target.value)} />
                        <div class="flex-grow border border-dashed border-zinc-50 w-full my-8"></div>
                        { (props.mode === "create") && <CreatePostButton post={{postName: postName, postSummary: postSummary, markdown: markdown}} /> }
                        { (props.mode === "edit") && <EditPostButton post={{postName: postName, postSummary: postSummary, markdown: markdown}} /> }
                    </div>
                </div>
            
                <div class="flex flex-col items-center w-6/12 px-8">
                    <div class="w-full bg-zinc-100 py-16 px-4 mx-5 h-full rounded-xl">
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
    const navigate = useNavigate();

    const EditPost = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        await api.editPost({...props.post, token}).then(() => {
            window.alert("Post edited!")
            navigate("../")
        }).catch(error => {
            window.alert(error.response.data.error)
        })
        
    }
    
    const DeletePost = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        console.log({...props.post, token})
        await api.deletePost({...props.post, token}).then(() => {
            window.alert("Post deleted!")
            navigate("../")
        }).catch(error => {
            window.alert(error.response.data.error)
        })
        
    }

    return (
        <div>
            <button class="bg-zinc-900 hover:text-zinc-800 text-zinc-100 text-xl px-4 py-2 rounded-full" onClick={EditPost}>Edit Post</button>
            <button class="bg-zinc-900 hover:text-zinc-800 text-zinc-100 text-xl px-4 py-2 rounded-full" onClick={DeletePost}>Delete Post</button>
        </div>
    )
}


export default MarkdownEditor;