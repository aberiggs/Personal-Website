import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import fetchUserAuth from '../../redux/user/fetchUserAuth'
import { useState, useEffect } from 'react'

import Login from './Login'
import Signup from './Signup'


function Navbar () {
    const [showModal, setShowModal] = useState(false)
    const [showSignup, setShowSignup] = useState(false)

    useEffect(() => {
        if(isLoggedIn === true) {
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

    const Modal = () => {

        return(
            <div>
                {showModal && 
                    <div class="absolute inset-0 flex justify-center items-center z-0 bg-zinc-900/70">
                        <div class="bg-zinc-900 z-10 rounded-xl">
                        <button class="absolute bg-red-500 hover:bg-red-300 text-white font-bold w-10 h-10 rounded-tl-xl rounded-br-3xl" onClick={() => setShowModal(!showModal)}>X</button>
                            {!showSignup &&
                                <>
                                    <div class="flex justify-center p-3">
                                        <button class="bg-zinc-100 text-zinc-800  p-3 rounded-l-lg w-36 text-3xl">Login</button>
                                        <button class="bg-zinc-800 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-800 p-3 rounded-r-lg w-36 text-3xl" onClick={() => setShowSignup(true)}>Signup</button>
                                    </div>
                                    <Login />
                                </>
                            }
                            {showSignup &&
                                <>
                                    <div class="flex justify-center p-3">
                                        <button class="bg-zinc-800 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-800 p-3 rounded-l-lg w-36 text-3xl" onClick={() => setShowSignup(false)}>Login</button>
                                        <button class="bg-zinc-100 text-zinc-800 p-3 rounded-r-lg w-36 text-3xl">Signup</button>
                                    </div>
                                    <Signup />
                                </>
                            }

                    
                        </div>
                    </div>
                }
            </div>
        )
    }


    return (
        <div>

            <div class="flex h-20 justify-center w-full">
                <ul class="flex bg-zinc-900 w-11/12 items-center rounded-b-2xl">
                    <div class="flex justify-start w-3/12">
                        <Link class="flex text-zinc-100 hover:text-zinc-700 text-3xl px-6 h-20 items-center " to="../">Abe Riggs</Link>
                    </div>
                    <div class="flex w-9/12 justify-end">
                        <Link class="flex text-zinc-100  hover:text-zinc-700 text-3xl px-6 h-20 items-center" to="">Return</Link>
                        <Link class="flex text-zinc-100  hover:text-zinc-700 text-3xl px-6 h-20 items-center" to="create-post">Create Post</Link>
                        {!isLoggedIn && <button class="flex text-zinc-100  hover:text-zinc-700 text-3xl px-6 h-20 items-center" onClick={() => setShowModal(!showModal)}>Log In</button>}
                        {isLoggedIn && <button class="flex text-zinc-100  hover:text-zinc-700 text-3xl px-6 h-20 items-center" to="" onClick={() => logout()}>Log Out</button>}
                        
                   
                    </div>
                </ul>
                
            </div>

            <Modal />
           
            
        </div>
    );
}


export default Navbar