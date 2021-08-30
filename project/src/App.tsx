import React from "react"
import Contact from "./Contact"
import ProjectList from "./ProjectList"
import {
  HashRouter as Router,
} from "react-router-dom"

function App() {
  return(
    <div className="container">
      <Contact />
      <Router>
        <ProjectList />
      </Router>
    </div>
  )
}
export default App