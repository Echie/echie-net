import React from 'react'
import profile from '../assets/profile.jpg'

import './About.scss'

const AboutPage = () => (
    <div className="About">
        <img className="About-Profile" src={profile} alt="Profile" />
        <div className="About-First">
            <h3>About</h3>
            <ul>
                <li>Software Developer at <a href="https://www.dagmar.fi">Dagmar</a></li>
                <li>Full-stack maintenance and development of data-analytics apps</li>
                <li>Motivated by producing value for end users</li>
                <li>Also interested in DevOps & CI</li>
                <li>4.3 GPA in Master's studies in Aalto University</li>
            </ul>
        </div>

        <div className="About-Second">
            <h3>Technologies</h3>
            <ul>
                <li>Python, Django, jQuery</li>
                <li>React, Node</li>
                <li>PhantomJS, Mocha</li>
                <li>C, C++, C#</li>
                <li>MySQL, PostgreSQL, SQLite, MongoDB, Redis</li>
                <li>Google Cloud, AWS, Heroku</li>
                <li>Docker, Vagrant, Travis, Jenkins</li>
            </ul>
        </div>

    </div>
)

export default AboutPage


