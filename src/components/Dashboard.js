import Signup from './dashboard/Signup'
import Navbar from './dashboard/Navbar'
import Login from './dashboard/Login'
import Post from './dashboard/Post'
import Home from './dashboard/Home'

import {
    Routes,
    Route
  } from "react-router-dom";

function Dashboard() {

    return (
        <div>
            <Navbar/>
            <Routes>

                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post/:postName" element={<Post />}/>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />

            </Routes>
        </div>
    );
}

function Error404() {
    return <h2>Error 404, page not found.</h2>
  }

export default Dashboard;