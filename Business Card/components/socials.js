import React from "react"


export default function Socials() {
    return (
        <footer className="footer">
           
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io">
                        <i className="fab fa-codepen large"></i>
                    </a>
                </li>
                
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/matthew-parmer-74ba87248/">
                        <i className="fab fa-linkedin large"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/Pigiron55">
                        <i className="fab fa-github large"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}