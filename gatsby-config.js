module.exports = {
  siteMetadata: {
    title: "Peter Wu Blog",
    description: "This is my coding blog.",
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `https://dummy-url-for-now.com`,
    authorName: `Peter JC Wu`,
    twitterUsername: `@authorOfPosts`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};
