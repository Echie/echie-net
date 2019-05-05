import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './HeroImage.scss'

const HeroImage = () => (
    <StaticQuery
        query={graphql`
            query {
                hero: file(relativePath: { eq: "hero.jpeg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 4160) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <BackgroundImage className="HeroImage" fluid={data.hero.childImageSharp.fluid} />}
    />
)

export default HeroImage
