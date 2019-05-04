import React from 'react'

import './Flipper.scss'

const Flipper = ({ name, logo, text }) => (
    <div className="Flipper">
        <div className="Flipper-Inner">
            <div className="Flipper-Front">
                <img src={logo} alt={`${name} Logo`} />
            </div>
            <div className="Flipper-Back">
                <p>{text}</p>
            </div>
        </div>
    </div>
)

export default Flipper
