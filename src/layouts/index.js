import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../lib/font-awesome/css/font-awesome.min.css'
import './index.scss'

const Footer = () => (
  <div className="Footer">
    <div className="Footer-Text">
      <p className="small">© Teemu Huovinen 2017</p>
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

const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet
      title="Teemu Huovinen"
      meta={[{ name: 'description', content: 'Homepage of Teemu Huovinen' }]}
    />
      {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
