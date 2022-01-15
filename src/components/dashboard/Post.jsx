import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import api from '../../api'

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MarkdownDisplay from './MarkdownDisplay';

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
    const [postExists, setPostExists] = useState(false)

    const params = useParams()

    // TODO: Fix updating twice issue.
    useEffect(() => {
        getMarkdown()
      }, [value]);

    const getMarkdown = async () => {
        await api.getMarkdownFromPostName(params.postName).then(res => {
            setMarkdown(String(res.data.fileContent))
            setPostExists(true)
        }).catch(res => {
            console.log(res)
        })
    }

    
    if(postExists) {
        return(
            <Background>
                <PostDiv>
                    <MarkdownDisplay postName={params.postName} markdown={markdown} />
                    <PostTitle>{params.postName}</PostTitle>
                    <PostBody>
                        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />   
                    </PostBody>
                    
                </PostDiv>
            </Background>
        )
    } else {
        return <h2>Error 404, page not found.</h2>
    }


    
}

export default Post