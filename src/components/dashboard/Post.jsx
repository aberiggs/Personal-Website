import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import api from '../../api'

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: black;
`

const PostDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    font-size: 20px;
    width: 60%;
    margin: 5vmin;
    padding: 5vmin;
`

const PostTitle = styled.h1`
    text-decoration: underline;
    font-size: 10vmin;
    margin: 0;
    padding: 0;
`

const PostBody = styled.div`
    font-size: 2vmin;
    width: 100%;
`

const Post = () => {
    const [value] = useState('');
    const [markdown, setMarkdown] = useState("")

    const params = useParams()

    // TODO: Fix updating twice issue.
    useEffect(() => {
        getMarkdown()
        console.log("test")
      }, [value]);

    const getMarkdown = async () => {
        await api.getMarkdownFromPostName(params.postName).then(res => {
            setMarkdown(String(res.data.fileContent))
        }).catch(res => {
            window.alert("An unexpected error has occurred!")
        })
    }


    return(
        <Background>
            <PostDiv>
                <PostTitle>{params.postName}</PostTitle>
                <PostBody>
                    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />   
                </PostBody>
                
            </PostDiv>
        </Background>
    )
    
}

export default Post