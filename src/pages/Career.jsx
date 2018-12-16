import React from 'react'
import Flipper from './Flipper'
import './Career.scss'

import swappie from '../assets/swappie.png'
import dagmar from '../assets/dagmar.png'
import futurice from '../assets/futurice.png'

const companies = [
  {
    name: 'Swappie',
    logo: swappie,
    text: `My responsibilities at Swappie extend from the development of the e-commerce site
      to various back-end management systems, such as inventory management and order fulfillment.`,
  },
  {
    name: 'Dagmar',
    logo: dagmar,
    text: `At Dagmar, I was responsible for the software side of a data analytics team.
      I improved their cloud hosting setup, developed existing applications and created prototypes
      for new ones. I also wrote my thesis at Dagmar on an agile piloting project.`,
  },
  {
    name: 'Futurice',
    logo: futurice,
    text: `I started at Futurice as a summer worker, and continued part-time after summer
      while simultaneously finishing up my university courses.
      During this time, I completed an integrations project for a customer as the main developer.`,
  },
]

const Career = () => (
  <div className="Career">
    <h2>CAREER</h2>

    {companies.map(c => (
      <Flipper key={c.name} logo={c.logo} name={c.name} text={c.text} />
    ))}
  </div>
)

export default Career
