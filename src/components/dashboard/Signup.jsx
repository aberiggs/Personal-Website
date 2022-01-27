import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import api from '../../api'
import fetchUserAuth from '../../redux/user/fetchUserAuth'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const Signup = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        async function checkUsername() {
            if (document.getElementById("create-account-button") != null) {
                await api.checkUserExistenceByUsername(username).then( () => {
                    document.getElementById("create-account-button").disabled = true;
                }).catch(res => {
                    if (res.response.status === 404) {
                        document.getElementById("create-account-button").disabled = false;
                    }
                })
            }
        }
        checkUsername()
    }, [username])

    const handleCreateUser = async () => {
        const payload = { username, password }

        api.checkUserExistenceByUsername(username).then( () => {
            window.alert(`Account not created, nice try ;)`)
        }).catch(res => {
            if (res.response.status === 404) {
                createUser(payload)
            }
        })

    }

    const createUser = async payload => {
        await api.createUser(payload).then(res => {
            window.alert(`Account created successfully`)

            localStorage.setItem("token", JSON.stringify(res.data.token))
            dispatch(fetchUserAuth(res.data.token))
            setUsername("")
            setPassword("")
        }).catch((error) => {
            window.alert(error)
        })
    }

    const handleCheckUser = async () => {
        await api.checkUserExistenceByUsername(this.state.username).then( res => {
            window.alert('A user with that username exists!')
        }).catch(res => {
            if (res.response.status === 404) {
                window.alert(`A user with that username doesn't exist yet!`)
            }
        })

    }

    return (
        <Wrapper>
            <Title>Create Account</Title>

            <Label>Username: </Label>
            <InputText
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <Label>Password: </Label>
            <InputText
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <Button id="create-account-button" onClick={() => handleCreateUser()}>Add User</Button>
        </Wrapper>
    )
}

export default Signup