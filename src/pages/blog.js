import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@global'
import { FeaturedPost, Post, BlogNav } from '@elements'

const BlogPage = ({ data }) => {
  const { posts } = data.allSanityPost

  const firstPost = posts[0]

  return (
    <Layout>
      <BlogNav />
      <div className="px-4 pb-20 mx-auto mt-15 sm:px-12 md:px-13 lg:px-12 max-w-screen-2xl">
        <section className="grid grid-cols-1 gap-10 xl:gap-15 md:grid-cols-2 xl:grid-cols-3">
          <FeaturedPost
            to={`/blog/${firstPost.slug.current}/`}
            fluid={firstPost.featuredImage.asset.fluid}
          >
            <FeaturedPost.Tag category={firstPost.category}>
              {firstPost.category}
            </FeaturedPost.Tag>
            <FeaturedPost.Title>{firstPost.title}</FeaturedPost.Title>
            <FeaturedPost.Excerpt>{firstPost.excerpt}</FeaturedPost.Excerpt>
            <FeaturedPost.Author fluid={firstPost.author.photo.asset.fluid}>
              {firstPost.author.fName} {firstPost.author.lName}
            </FeaturedPost.Author>
            <FeaturedPost.PostedDate>
              {firstPost.postedDate}
            </FeaturedPost.PostedDate>
          </FeaturedPost>
          {posts
            .filter((post) => posts.indexOf(post) !== 0)
            .map((post) => {
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
        </section>
      </div>
    </Layout>
  )
}

export default BlogPage

export const BLOG_QUERY = graphql`
  query {
    allSanityPost(sort: { order: DESC, fields: postedDate }) {
      posts: nodes {
        title
        excerpt
        category
        slug {
          current
        }
        author {
          fName
          lName
          photo {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        postedDate(formatString: "MMM DD YYYY")
        featuredImage {
          asset {
            fluid(maxWidth: 1600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
