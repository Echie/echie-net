import React from 'react'
import profile from '../assets/profile.jpg'

import './About.scss'

const AboutPage = () => (
    <div className="About">
        <img className="About-Profile" src={profile} alt="Profile"/>
        <div className="About-First">
            <h3>About</h3>
            <ul>
                <li>Software Developer at <a href="https://www.dagmar.fi">Dagmar</a></li>
                <li>Full-stack maintenance and development of data-analytics apps</li>
                <li>Motivated by producing value for end users</li>
                <li>Also interested in DevOps, CI and React Native</li>
                <li>4.3 GPA in Master's studies in Aalto University</li>
                <li>
                    <a href="https://atalent.fi/blog/talent-of-the-month-teemu-huovinen-futurice/">
                        Check out this blog post about me and Futurice
                    </a>
                </li>
            </ul>

        </div>

        <div className="About-Second">
            <h3>Technologies</h3>
            <ul>
                <li>React, Node</li>
                <li>Python, Django, jQuery, PhantomJS, Mocha</li>
                <li>C, C++, C#</li>
                <li>MySQL, SQLite, MongoDB</li>
                <li>Google Cloud, AWS, Heroku</li>
                <li>Docker, Vagrant, Travis, Jenkins</li>
            </ul>
        </div>

    </div>
)

export default AboutPage


