import React from 'react'
import profile from '../assets/profile.jpg'

import './Hero.scss'

const Hero = () => (
    <div className="Hero">
        <img className="Hero-Pic" src={profile} alt="Profile"/>
        <h1 className="Hero-Title">
            TEEMU HUOVINEN
        </h1>
        <div className="Hero-Separator"/>
        <p className="Hero-Skills">Full-Stack Web Developer | Tech enthusiast | Nerd </p>
    </div>
)

export default Hero


