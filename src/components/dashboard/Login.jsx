import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

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


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            userExistence: false,
        }
    }

    handleChangeInputUsername = async event => {
        const username = event.target.value
        this.setState({ username })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleCheckUser = async () => {
        await api.checkUserExistenceByUsername(this.state.username).then( res => {
            window.alert('A user with that username exists!')
        }).catch(res => {
            if (res.response.status === 404) {
                window.alert(`A user with that username doesn't exist yet!`)
            }
        })

    }

    render() {
        const { username, password } = this.state
        return (
            <Wrapper>
                <Title>Log In</Title>

                <Label>Username: </Label>
                <InputText
                    type="text"
                    value={username}
                    onChange={this.handleChangeInputUsername}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />

                <Button onClick={this.handleCheckUser}>Login</Button>
                <p>Don't have an account? <StyledLink to="../signup">Sign up here!</StyledLink></p>
            </Wrapper>
        )
    }
}

export default Login;