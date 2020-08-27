require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `iigbo0uz`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
