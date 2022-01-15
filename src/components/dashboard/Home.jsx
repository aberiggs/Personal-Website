import api from '../../api'

import styled from 'styled-components';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    // TODO: Come to understand why this value thingy works
    const [value] = useState('');
    const[postNames, setPostNames] = useState([])

    useEffect(() => {
        getPosts()
    }, [value]);

    const getPosts = async () => {
        await api.getPostNames().then((res) => {
            setPostNames(res.data.postNames)
        }).catch(res => {
            window.alert("An unexpected error has occurred!")
        })
    }
    
    const PostList = styled.div`
        display: flex;        
        align-items: center;
        flex-direction: column;
        width: 100%;
    `


    return(
        <div>
            <h1>
               Posts: 
            </h1>
            <PostList>
            {postNames.map((item, index) => {
                return <PostPreview key={index} postName={item} />
            })}
            </PostList>
            
            
        </div>
    )
}

const PostPreview = (props) => {
    const postName = props.postName

    const PreviewDiv = styled.div`
        display: flex;
        flex-direction: column;
        border: solid;
        border-width: .4vmin;
        border-color: black;
        border-radius: 1vmin;
        width: 60%;
        margin: 2vmin;
        
    `

    const Post = styled(Link)`
        text-decoration: none;
        color: black;
        font-size: 5vmin;
        
        padding: 1vmin;
        margin: 1vmin;

        &:hover .post-name{
            text-decoration: underline;
        }
    `

    const PostName = styled.p.attrs({
        className: 'post-name',
    })`
        margin: 0;
        padding: 0;
    `

    const PostSummary = styled.p`
        font-size: 2vmin;
    `

    return(
        <PreviewDiv>
            <Post to={"post/" + postName}>
                <PostName>{postName}</PostName>
                <PostSummary>This is a summary of the post above that you may consider reading :)</PostSummary>
            </Post>
            
        </PreviewDiv>
    )
}


export default Home;