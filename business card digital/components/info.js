import React from "react"
import ReactDOM from "react-dom"

export default function Info() {
    return (
        <div className="info">
            <img src="../images/me-in-peru.jpg" width="200px"/>
            <h2>Matthew Parmer</h2>
            <h4>Frontend Developer</h4>
            <p><small>https://mattportfolio23.netlify.app</small></p>
            <a className="email" href="mailto:devmatt555@gmail.com">EMAIL</a>
            <a className="linkedin" href="https://www.linkedin.com/in/matthew-parmer-74ba87248/">Linkedin</a>
        </div>
    )
}