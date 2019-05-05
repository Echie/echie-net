module.exports = {
    siteMetadata: {
        title: `Teemu Huovinen`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ]
}
