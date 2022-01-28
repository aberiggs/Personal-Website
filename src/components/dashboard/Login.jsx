import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md"

import api from '../../api'
import fetchUserAuth from '../../redux/user/fetchUserAuth'

const Login = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()

    const handleLoginUser = async () => {
        if (username == '' || password == '') {
            setErrorMessage("You must enter a username and password!")
            return
        } 
        
        const payload = { username, password }

        await api.loginUser(payload).then( res => {
            setUsername("")
            setPassword("")
            localStorage.setItem("token", JSON.stringify(res.data.token))
            dispatch(fetchUserAuth(res.data.token))
        }).catch(() => {
            setErrorMessage("Invalid username or password!")
        })

    }

    return (
        <div class="flex flex-col justify-center items-center px-20">
            <h1 class="text-stone-300 text-2xl">Log In</h1>

            <div class="flex p-4 text-lg">
                <input class="shadow appearance-none border border-red rounded w-full px-2 text-grey-darker"
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div class="flex p-4 text-lg">

                <input class="shadow appearance-none border border-red rounded w-full px-2 text-grey-darker"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div class="flex w-64 text-center justify-center">
                <a class="text-red-400 break-words">{errorMessage}</a>
            </div>
            <div class="flex p-4">
                <button class="bg-stone-700 hover:bg-stone-100 text-stone-300 font-bold py-2 px-4 rounded" onClick={() => handleLoginUser()}>Login</button>
            </div>
        </div>
    )
    
}

export default Login;