import Signup from './dashboard/Signup'
import Navbar from './dashboard/Navbar'
import Login from './dashboard/Login'

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
                <Route path="/" element={<h1>DevBlog Home</h1>} />
                <Route path="*" element={<Error404 />} />
            

            </Routes>
        </div>
    );
}

function Error404() {
    return <h2>Error 404, page not found.</h2>
  }

export default Dashboard;