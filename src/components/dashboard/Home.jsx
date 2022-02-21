import api from '../../api'

import styled from 'styled-components';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    const[posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, []);

    const getPosts = async () => {
        await api.getPosts().then((res) => {
            setPosts(res.data.posts)
        }).catch(res => {
            window.alert("An unexpected error has occurred!")
        })
    }
    
    return(
        <div class="flex items-center flex-col w-full">
            <h class="text-8xl text-zinc-50">
               Posts
            </h>
            <div class="flex items-center flex-col w-full">
            {posts.map((item, index) => {
                return <PostPreview key={index} post={item} />
            })}
            </div>
            
            
        </div>
    )
}

const PostPreview = (props) => {
    const postName = props.post.postName
    const postSummary = props.post.postSummary

    return(
        <div class="flex flex-col w-7/12 border-[6px] border-zinc-900 m-6 rounded-2xl">
            <Link class="text-zinc-50 group p-6" to={"post/" + postName}>
                <p class="text-6xl group-hover:overline pb-8 decoration-4">{postName}</p>
                <p class="text-2xl">{postSummary}</p>
            </Link>
            
        </div>
    )
}


export default Home;