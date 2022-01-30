import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import api from '../../api'
import fetchUserAuth from '../../redux/user/fetchUserAuth'

const Signup = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[confirmedPassword, setConfirmedPassword] = useState('')
    const[errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()

    const handleCreateUser = async () => {
        if (username == '' || password == '') {
            setErrorMessage("You must create a username and password!")
            return
        } else if (password != confirmedPassword) {
            setErrorMessage("Confirmed password is not the same as password!")
            return
        }

        const payload = { username, password }

        await api.checkUserExistenceByUsername(username).then( () => {
            setErrorMessage('A user with that username already exists!')
        }).catch(res => {
            if (res.response.status === 404) {
                createUser(payload)
            }
        })

    }

    const createUser = async payload => {
        await api.createUser(payload).then(res => {
            localStorage.setItem("token", JSON.stringify(res.data.token))
            dispatch(fetchUserAuth(res.data.token))
            setUsername("")
            setPassword("")
            setConfirmedPassword("")
        }).catch((error) => {
            setErrorMessage("There was an error creating the account!")
        })
    }

    return (
        <div class="flex flex-col justify-center items-center px-20">
            <h1 class="text-stone-300 text-2xl">Sign up</h1>

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

            <div class="flex p-4 text-lg">

                <input class="shadow appearance-none border border-red rounded w-full px-2 text-grey-darker"
                    type="password"
                    value={confirmedPassword}
                    placeholder="confirm password"
                    onChange={e => setConfirmedPassword(e.target.value)}
                />
            </div>

            <div class="flex w-64 text-center justify-center">
                <p class="text-red-400 break-words">{errorMessage}</p>
            </div>

            <div class="flex p-4">
                <button class="bg-stone-700 hover:bg-stone-100 text-stone-300 font-bold py-2 px-4 rounded" onClick={() => handleCreateUser()}>Signup</button>
            </div>
        </div>
    )
}

export default Signup