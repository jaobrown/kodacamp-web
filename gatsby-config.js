require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Koda | Web Design and Development Tutorials`,
    description: `Koda provides approachable, intermediate Javascript and CSS tutorials for people who want to build better things. There’s no shortage of tools for the job, just how they work together.`,
    image: 'https://koda.camp/meta/kodacamp.jpg',
    author: `@jaobrown`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `iigbo0uz`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
      },
    },
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Koda Camp`,
        short_name: `Koda`,
        start_url: `/`,
        background_color: `#EF301F`,
        theme_color: `#EF301F`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/meta/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `koda.camp`,
      },
    },
  ],
}
