import React from 'react'

import './About.scss'

const AboutPage = () => (
    <div className="About">
        <div className="About-First">
            <h3>About</h3>
            <ul>
                <li>~2 years of work experience</li>
                <li>Motived by producing value for end users</li>
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
                <li>jQuery, PhantomJS, Mocha, Django, PHP</li>
                <li>C, C++, C#</li>
                <li>MySQL, SQLite, MongoDB</li>
                <li>AWS, Heroku, Google Cloud</li>
                <li>Docker, Vagrant, Travis, Jenkins</li>
            </ul>
        </div>

    </div>
)

export default AboutPage


