import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js"

export default function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
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