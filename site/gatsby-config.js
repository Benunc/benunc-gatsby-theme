module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `@alexadark`,
    wordPressUrl: `http://gatsby.wpsteward.com`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `http://gatsby.wpsteward.com` },
    },
  ],
};
