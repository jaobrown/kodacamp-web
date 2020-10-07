import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '@global'

const CategoryTemplate = ({ data }) => {
  const { nodes: posts } = data.allSanityPost

  return (
    <Layout>
      <div className="container">
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            return (
              <Link to={`/blog/${post.slug.current}/`}>
                <article>
                  <span>{post.category}</span>
                  <Img fluid={post.featuredImage.asset.fluid} />
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <p>
                    {post.author.fName} {post.author.lName}
                  </p>
                  <div>{post.postedDate}</div>
                </article>
              </Link>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export default CategoryTemplate

export const CATEGORY_QUERY = graphql`
  query($category: String!) {
    allSanityPost(filter: { category: { eq: $category } }) {
      nodes {
        title
        excerpt
        category
        slug {
          current
        }
        author {
          fName
          lName
        }
        postedDate(formatString: "MMM DD YYYY")
        featuredImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
