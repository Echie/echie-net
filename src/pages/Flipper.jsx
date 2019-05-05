import React from 'react'
import Img from 'gatsby-image'
import './Flipper.scss'

const Flipper = ({ name, logo, text }) => (
    <div className="Flipper">
        <div className="Flipper-Inner">
            <div className="Flipper-Front">
                <Img fluid={logo} alt={name} fixed={typeof window === 'undefined' ? { src: {} } : undefined} />
            </div>
            <div className="Flipper-Back">
                <p>{text}</p>
            </div>
        </div>
    </div>
)

export default Flipper
