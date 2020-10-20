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
          category
          slug {
            current
          }
        }
      }
    }
  `)

  //! temporary - until we have a design post
  const categories = ['development', 'design']

  // Create pages
  await result.data.pages.nodes.forEach((page) => {
    const slug = page.slug ? page.slug.current : `/`

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/page.jsx`),
      context: {
        _id: page._id,
      },
    })
  })

  // Create posts
  await result.data.posts.nodes.forEach((post) => {
    const slug = post.slug.current
    // todo: bring this puppy back
    // categories.push(post.category)

    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(`./src/templates/post.jsx`),
      context: {
        _id: post._id,
      },
    })
  })

  categories.forEach((category) => {
    createPage({
      path: `/blog/${category}`,
      component: path.resolve(`./src/templates/category.jsx`),
      context: {
        category: category,
      },
    })
  })
}
