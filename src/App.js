import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import FrontPage from "./components/FrontPage.js";
import Contact from "./components/Contact.js"

export default function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
            <FrontPage />
          </Route>

          <Route path="/contact">
            <Contact />
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