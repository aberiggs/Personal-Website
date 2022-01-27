import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
  
import store from '../redux/store'
import { authenticateUser } from "../redux/user/userActions";


import Signup from './dashboard/Signup.jsx'
import Navbar from './dashboard/Navbar'
import Login from './dashboard/Login'
import Post from './dashboard/Post'
import Home from './dashboard/Home'
import MarkdownEditor from './dashboard/MarkdownEditor'
import JsonWebTokenAuth from "../api/JsonWebTokenAuth";

function Dashboard() {

    const fetchUserAuth = token => {
        return function async(dispatch) {
            const test = JsonWebTokenAuth()
            console.log(test)

                /*
                if (res.data) {
                    console.log('yup')
                    dispatch(authenticateUser(res.data.jwtData.username, res.data.jwtData.isAdmin, true))
                } else {
                    console.log("nop")
                    dispatch(authenticateUser(null, false, false))
                }
                */
                
           
        }
    }

    // Check for token and update application state if required
    const token = localStorage.getItem('token');
    if (token) {
        console.log("Token found!")
        store.dispatch(fetchUserAuth(token))
    }

    

    return (
        <Provider store={store}>
            <div>
                <Navbar/>
                <Routes>

                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create-post" element={<MarkdownEditor mode={"create"} />} />
                    <Route path="/post/:postName" element={<Post />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />

                </Routes>
            </div>
        </Provider>
    );
}

function Error404() {
    return <h2>Error 404, page not found.</h2>
  }

export default Dashboard;