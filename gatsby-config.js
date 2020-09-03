require('dotenv').config()

module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-source-sanity`,
    //   options: {
    //     projectId: `iigbo0uz`,
    //     dataset: `production`,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir — alias paths below will be relative to this
        aliases: {
          '@elements': './components/elements', // <- "@elements" will become ./src/elements
          '@global': './components/global',
          '@hooks': './hooks',
          '@images': './images',
          '@layouts': './components/layouts',
          '@utils': './utils',
        },
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
