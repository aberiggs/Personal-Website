import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import fetchUserAuth from '../../redux/user/fetchUserAuth'
import { useState, useEffect } from 'react'

import Login from './Login'
import Signup from './Signup'

const NavbarDiv = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: auto;
    background-color: black;
    
`

const Selections = styled.ul`
    display: flex;
    justify-content: right;
    background-color: white;
    list-style-type: none;
    width: 80%;
    margin: 0;
    padding: 0;
`

const NavbarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    color: black;
    text-decoration: none;
    font-size: 3vmin;
    padding: .5em 2vw;    

    &:hover {
        background-color: grey;
    }
`

const NavbarThing = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    color: black;
    text-decoration: none;
    font-size: 3vmin;
    padding: .5em 2vw;    

    &:hover {
        background-color: grey;
    }
`

const StyledLink = styled(Link)`
    color: #40a2f1;
    &:hover {
        color: #ffffff;
    }
`

function Navbar () {
    const [showModal, setShowModal] = useState(false)
    const [showSignup, setShowSignup] = useState(false)

    useEffect(() => {
        if(isLoggedIn == true) {
            setShowModal(false)
            setShowSignup(false)
        }
    })
    

    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(fetchUserAuth())
    }

    return (
        <>
            <NavbarDiv>
                <Selections>
                    <NavbarLink to="../">Home</NavbarLink>
                    <NavbarLink to="">Return</NavbarLink>
                    {!isLoggedIn && <NavbarThing onClick={() => setShowModal(!showModal)}>Log In</NavbarThing>}
                    {isLoggedIn && <NavbarLink to="" onClick={() => logout()}>Log Out</NavbarLink>}
                    <NavbarLink to="create-post">Create Post</NavbarLink>
                </Selections>
            </NavbarDiv>
            {showModal && 
                <div class="absolute inset-0 flex justify-center items-center z-0 bg-stone-400/50">
                    <div class="bg-stone-600 z-10 rounded-xl">
                    <button class="absolute bg-red-500 hover:bg-red-300 text-white font-bold w-10 h-10 rounded-tl-xl rounded-br-3xl" onClick={() => setShowModal(!showModal)}>X</button>
                        {!showSignup &&
                            <>
                                <div class="flex justify-center p-3">
                                    <button class="bg-stone-300 text-stone-800  p-3 rounded-l-lg w-36 text-3xl">Login</button>
                                    <button class="bg-stone-800 text-stone-300 hover:bg-stone-300 hover:text-stone-800 p-3 rounded-r-lg w-36 text-3xl" onClick={() => setShowSignup(true)}>Signup</button>
                                </div>
                                <Login />
                            </>
                        }
                        {showSignup &&
                            <>
                                <div class="flex justify-center p-3">
                                    <button class="bg-stone-800 text-stone-300 hover:bg-stone-300 hover:text-stone-800 p-3 rounded-l-lg w-36 text-3xl" onClick={() => setShowSignup(false)}>Login</button>
                                    <button class="bg-stone-300 text-stone-800 p-3 rounded-r-lg w-36 text-3xl">Signup</button>
                                </div>
                                <Signup />
                            </>
                        }

                
                    </div>
                </div>
            }
            
        </>
    );
}

export default Navbar