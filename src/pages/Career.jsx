import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Flipper from './Flipper'
import './Career.scss'

const companies = [
    {
        name: 'swappie',
        text: `My responsibilities at Swappie extend from the development of the e-commerce site
      to various back-end management systems, such as inventory management and order fulfillment.`
    },
    {
        name: 'dagmar',
        text: `At Dagmar, I was responsible for the software side of a data analytics team.
      I improved the cloud hosting setup, developed existing applications and created prototypes
      for new ones. I also wrote my thesis at Dagmar on an agile piloting project.`,
    },
    {
        name: 'futurice',
        text: `I started at Futurice as a summer worker, and continued part-time after summer
      while simultaneously finishing up my university courses.
      During this time, I completed an integrations project for a customer as the main developer.`,
    },
]

const Career = ({ data }) => (
    <div className="Career">
        <h2>CAREER</h2>
        {companies.map(c => (
            <Flipper key={c.name} name={c.name} logo={data[c.name].childImageSharp.fluid} text={c.text} />
        ))}
    </div>
)

export const logoImage = graphql`
    fragment logoImage on File {
        childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export default props => (
    <StaticQuery
        query={graphql`
            query {
                futurice: file(relativePath: { eq: "futurice.png" }) {
                    ...logoImage
                }
                dagmar: file(relativePath: { eq: "dagmar.png" }) {
                    ...logoImage
                }
                swappie: file(relativePath: { eq: "swappie.png" }) {
                    ...logoImage
                }
            }
        `}
        render={data => <Career data={data} {...props} />}
    />
)
