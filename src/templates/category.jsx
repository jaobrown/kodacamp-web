import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@global'
import { Post, BlogNav } from '@elements'

const CategoryTemplate = ({ data }) => {
  const { nodes: posts } = data.allSanityPost

  return (
    <Layout>
      <BlogNav />
      <section className="px-4 pb-20 mx-auto sm:px-12 md:px-13 lg:px-12 mt-15 max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-10 xl:gap-15 md:grid-cols-2 xl:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => {
              return (
                <Post
                  to={`/blog/${post.slug.current}/`}
                  fluid={post.thumbnailImage.asset.fluid}
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
            })
          ) : (
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              No posts just yet <span role="img" aria-label="emoji">😅</span>
            </h2>
          )}
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
        thumbnailImage {
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
