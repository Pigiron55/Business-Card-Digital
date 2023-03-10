import React from "react"
import ReactDOM from "react-dom"
import Picture from "./components/picture.js"
import Info from "./components/info.js"
import About from "./components/about.js"
import Interests from "./components/interests.js"
import Socials from "./components/socials.js"

function Main() {
    return (
        <div className="container">
            <Picture />
            <Info />
            <About />
            <Interests />
            <Socials />
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"))