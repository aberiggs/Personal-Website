import api from '../../api'
import { Link, useNavigate, useParams } from "react-router-dom";

import React, { useState, useEffect } from 'react';

import MarkdownDisplay from './MarkdownDisplay';

const Post = () => {
    const navigate = useNavigate();
    const [markdown, setMarkdown] = useState("")
    

    const params = useParams()

    // TODO: Fix updating twice issue.
    useEffect(() => {
        getMarkdown()
      }, []);

    const getMarkdown = async () => {
        await api.getMarkdownFromPostName(params.postName).then(res => {
            setMarkdown(String(res.data.fileContent))
        }).catch(res => {
            navigate("../*")
        })
    }

    
    if (markdown){
        return(
            <div class="flex w-full justify-center items-center">
                <div class="flex justify-center items-center flex-col bg-zinc-100 w-7/12 m-6 pt-16 rounded-xl">
                    <MarkdownDisplay postName={params.postName} markdown={markdown} />
                    <Link class="text-sm text-sky-500 italic pt-12 pb-3 hover:underline"to="./edit">Edit this post</Link>
                </div>
            </div>
        )
    } else {
        return null;
    }
    


    
}

export default Post