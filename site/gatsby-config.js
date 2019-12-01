module.exports = {
  siteMetadata: {
    title: `Setting Up Headless WordPress With Gatsby`,
    description: `This is my documented learning setting up a Headless WordPress installation with Gatsby.js. I'm writing it in real time to follow my growth and pains.`,
    author: `@benUNC`,
    wordPressUrl: `https://gatz.wpsteward.com/blog`,
  },
plugins: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `https://gatsby.wpsteward.com` },
    },
  ],
};
