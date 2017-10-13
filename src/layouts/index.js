import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../lib/font-awesome/css/font-awesome.min.css'
import './index.scss'

const Header = () => (
  <div className="Header">
    <h2 className="Header-Title">ECHIE.NET</h2>
    <div className="Header-SocialMedia">
      <a href="http://www.github.com/Echie">
        <i className="fa fa-2x fa-github" aria-hidden="true" />
      </a>
      <a href="http://www.linkedin.com/in/teemuhuovinen">
        <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
      </a>
    </div>
  </div>
)

const Footer = () => (
  <div className="Footer">
      <p className="small">© Teemu Huovinen 2017</p>
  </div>
)

const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet
      title="Teemu Huovinen"
      meta={[{ name: 'description', content: 'Homepage of Teemu Huovinen' }]}
    />
    <Header />
      {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
