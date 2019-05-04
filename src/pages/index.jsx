import React from 'react'
import Helmet from 'react-helmet'
import HeroBlock from './HeroBlock'
import HeroImage from './HeroImage'
import About from './About'
import Career from './Career'

import '../lib/font-awesome/css/font-awesome.min.css'
import './index.scss'

const Footer = () => (
    <div className="Footer">
        <div className="Footer-Text">
            <p className="small">© Teemu Huovinen 2018</p>
        </div>
        <div className="Footer-SocialMedia">
            <a href="http://www.github.com/Echie">
                <i className="fa fa-2x fa-github" aria-hidden="true" />
            </a>
            <a href="http://www.linkedin.com/in/teemuhuovinen">
                <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
            </a>
        </div>
    </div>
)

const IndexPage = () => (
    <div>
        <Helmet title="Teemu Huovinen" meta={[{ name: 'description', content: 'Homepage of Teemu Huovinen' }]} />
        <HeroImage />
        <HeroBlock />
        <About />
        <Career />
        <Footer />
    </div>
)

export default IndexPage
