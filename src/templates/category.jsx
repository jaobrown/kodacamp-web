import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@global'
import { Post } from '@elements'

const CategoryTemplate = ({ data }) => {
  const { nodes: posts } = data.allSanityPost

  return (
    <Layout>
      <section className="px-4 pb-20 sm:px-12 md:px-13 lg:px-12">
        <div className="grid grid-cols-1 gap-10 xl:gap-15 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => {
            return (
              <Post
                to={`/blog/${post.slug.current}/`}
                fluid={post.featuredImage.asset.fluid}
              >
                <Post.Tag category={post.category}>{post.category}</Post.Tag>
                <Post.Title>{post.title}</Post.Title>
                <Post.Excerpt>{post.excerpt}</Post.Excerpt>
                <Post.Author>
                  {post.author.fName} {post.author.lName}
                </Post.Author>
                <Post.PostedDate>{post.postedDate}</Post.PostedDate>
              </Post>
            )
          })}
        </div>
      </section>
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
