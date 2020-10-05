const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          _id
          title
          slug {
            current
          }
        }
      }
      posts: allSanityPost {
        nodes {
          _id
          title
          slug {
            current
          }
        }
      }
    }
  `)

  // create pages
  result.data.pages.nodes.forEach((page) => {
    const slug = page.slug ? page.slug.current : `/`

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/page.jsx`),
      context: {
        _id: page._id,
      },
    })
  })

  // create pages
  result.data.posts.nodes.forEach((post) => {
    const slug = post.slug.current

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/post.jsx`),
      context: {
        _id: post._id,
      },
    })
  })
}
