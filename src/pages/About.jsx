import React from 'react'
import profile from '../assets/profile.jpg'

import './About.scss'

const AboutPage = () => (
    <div className="About">
        <img className="About-Profile" src={profile} alt="Profile" />
        <div className="About-First">
            <h3>About</h3>
            <ul>
                <li>
                    Software Developer at <a href="https://swappie.com/fi/">Swappie</a>
                </li>
                <li>Motivated by producing value for end users</li>
                <li>Also interested in DevOps & CI</li>
                <li>Master of Science (Tech.) from Aalto University</li>
            </ul>
        </div>

        <div className="About-Second">
            <h3>Technologies</h3>
            <ul>
                <li>Python, Django</li>
                <li>React, Node</li>
                <li>C, C++, C#</li>
                <li>PostgreSQL, MySQL, MongoDB, Redis</li>
                <li>Google Cloud, AWS, Heroku</li>
                <li>Docker, Vagrant, Travis, Jenkins</li>
            </ul>
        </div>
    </div>
)

export default AboutPage
