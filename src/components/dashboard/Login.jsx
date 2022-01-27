import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

const StyledLink = styled(Link)`
    color: #40a2f1;
    &:hover {
        color: black;
    }
`


const Login = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLoginUser = async () => {
        const payload = { username, password }

        await api.loginUser(payload).then( res => {
            setUsername("")
            setPassword("")
            localStorage.setItem("token", JSON.stringify(res.data.token))
            dispatch(fetchUserAuth(res.data.token))
        }).catch(res => {
            if (res.response.status === 404) {
                window.alert(`A user with that username doesn't exist yet!`)
            }
        })

    }

    return (
        <Wrapper>
            <Title>Log In</Title>

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

            <Button onClick={() => handleLoginUser()}>Login</Button>
            <p>Don't have an account? <StyledLink to="../signup">Sign up here!</StyledLink></p>
        </Wrapper>
    )
    
}

export default Login;