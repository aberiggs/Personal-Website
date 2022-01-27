import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'

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

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            userExistence: false,
        }
    }

    // TODO: Fix serverside 404 error so that it does not spam console.
    handleChangeInputUsername = async event => {
        const username = event.target.value
        this.setState({ username })

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

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleCreateUser = async () => {
        const { username, password } = this.state
        const payload = { username, password }

        api.checkUserExistenceByUsername(username).then( () => {
            window.alert(`Account not created, nice try ;)`)
        }).catch(res => {
            if (res.response.status === 404) {
                this.createUser(payload)
            }
        })

    }

    createUser = async payload => {
        await api.createUser(payload).then(res => {
            window.alert(`Account created successfully`)
            console.log(res.data)

            localStorage.setItem("token", JSON.stringify(res.data.token))

            this.setState({
                username: '',
                password: '',
            })
        }).catch((error) => {
            window.alert(error)
        })
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
                <Title>Create Account</Title>

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

                <Button id="create-account-button" onClick={this.handleCreateUser}>Add User</Button>
            </Wrapper>
        )
    }
}

export default Signup