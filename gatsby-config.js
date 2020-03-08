const {
  siteDescription,
  userName,
  siteTitle,
  siteTitleShort,
  pathPrefix,
  siteLogo,
} = require("./data/site-config")

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: userName,
  },
  plugins: [
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitleShort,
        start_url: pathPrefix,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icons: [
          {
            src: siteLogo,
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: siteLogo,
            sizes: "1024x1024",
            type: "image/png",
          },
        ],
      },
    },
  ],
}
