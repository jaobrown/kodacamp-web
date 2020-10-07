import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '@global'

const BlogPage = ({ data }) => {
  const { nodes: posts } = data.allSanityPost

  const firstPost = posts.shift()

  return (
    <Layout>
      <div className="px-4 sm:px-12 md:px-13 lg:px-12">
        <section className="grid grid-cols-1 gap-10 xl:gap-20 md:grid-cols-2 xl:grid-cols-3">
          <article className="grid grid-cols-2 col-span-3">
            <Img fluid={firstPost.featuredImage.asset.fluid} />
            <Link to={`/blog/${firstPost.slug.current}/`}>
              <span>{firstPost.category}</span>
              <h3>{firstPost.title}</h3>
              <p>{firstPost.excerpt}</p>
              <p>
                {firstPost.author.fName} {firstPost.author.lName}
              </p>
              <div>{firstPost.postedDate}</div>
            </Link>
          </article>
          {posts.map((post) => {
            return (
              <Link to={`/blog/${post.slug.current}/`}>
                <article>
                  <Img fluid={post.featuredImage.asset.fluid} />
                  <span>{post.category}</span>
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

export default BlogPage

export const BLOG_QUERY = graphql`
  query {
    allSanityPost(sort: { order: DESC, fields: postedDate }) {
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
