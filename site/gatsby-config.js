module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `@benUNC`,
    wordPressUrl: `http://www.wpsteward.com`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `http://gatsby.wpsteward.com` },
    },
  ],
};
