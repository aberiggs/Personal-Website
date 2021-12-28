import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { UserProvider } from "./components/frontPage/UserContext";

import FrontPage from "./components/FrontPage.js";
import Dashboard from "./components/Dashboard.js";

export default function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <UserProvider>
            <FrontPage />
          </UserProvider>
        </Route>

        <Route path="/test">
          <Dashboard />
        </Route>

        <Route path="*">
          <Error404 />
        </Route>

      </Switch>
    </Router>
  )
}

function Error404() {
  return <h2>Error 404, page not found.</h2>
}