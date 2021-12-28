import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { UserProvider } from "./components/frontPage/UserContext";

import FrontPage from "./components/FrontPage.js";
import Dashboard from "./components/Dashboard.js";

export default function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<UserProvider><FrontPage /></UserProvider>} />
        <Route path="/test" element={<Dashboard/>} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </Router>
  )
}

function Error404() {
  return <h2>Error 404, page not found.</h2>
}