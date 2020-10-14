import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import { Layout } from '@global'
import { SocialCallout } from '@layouts'
import { SocialIcon, VideoPlayer, Tag, Post } from '@elements'

const CategoryTag = ({ category, children }) => {
  let color = ''
  switch (category) {
    case 'development':
      color = 'teal'
      break
    case 'design':
      color = 'red'
      break
    default:
      break
  }
  return <Tag color={color}>{children}</Tag>
}

const PostTemplate = ({ data }) => {
  const {
    title,
    category,
    excerpt,
    author,
    heroImage,
    _rawContent,
    postedDate,
  } = data.sanityPost

  const { posts } = data.allSanityPost

  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node
        return <VideoPlayer url={url} />
      },
    },
  }

  return (
    <Layout>
      <div className="container">
        <section className="py-10">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto">
              {/* tag */}
              <CategoryTag category={category}>{category}</CategoryTag>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900">
                {title}
              </h1>
              <p className="mt-4 text-lg text-gray-700">{excerpt}</p>
            </div>
            {/* author deets */}
            <div className="flex flex-wrap items-center max-w-3xl mx-auto mt-8">
              {/* photo */}
              <div className="flex items-center w-full sm:w-auto">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <Img fluid={author.photo.asset.fluid} />
                </div>
                {/* name + email */}
                <div className="inline-flex flex-col items-start justify-center ml-6">
                  <a
                    className="block font-bold"
                    href={`mailto:${author.email}`}
                  >
                    {author.fName} {author.lName}
                  </a>
                  {/* todo: make a proper date element */}
                  <span className="text-sm text-gray-500">{postedDate}</span>
                </div>
              </div>
              {/* socials */}
              <div className="flex items-center w-full mt-4 sm:mt-0 sm:ml-auto sm:justify-end sm:w-auto">
                {author.socials.map((social) => (
                  <a
                    href={`${social.link}`}
                    className="inline-flex mr-4 text-gray-900 sm:ml-4"
                  >
                    <SocialIcon platform={social.name} className="w-auto h-5" />
                  </a>
                ))}
              </div>
            </div>
            <Img
              fluid={heroImage.asset.fluid}
              className="w-full h-auto mt-13"
            />
          </div>
        </section>
        {/* content */}
        <section className="pt-10">
          <div className="container">
            <div className="max-w-3xl mx-auto prose sm:prose-lg">
              <BlockContent blocks={_rawContent} serializers={serializers} />
            </div>
          </div>
        </section>
      </div>
      <section className="-mb-12 mt-44">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="ml-5 text-4xl font-bold leading-tight text-gray-900">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 gap-10 mt-5 xl:gap-15 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <Post
                to={`/blog/${post.slug.current}/`}
                fluid={post.thumbnailImage.asset.fluid}
              >
                <Post.Tag category={post.category}>{post.category}</Post.Tag>
                <Post.Title>{post.title}</Post.Title>
                <Post.Excerpt>{post.excerpt}</Post.Excerpt>
                <Post.PostedDate className="mt-7">
                  {post.postedDate}
                </Post.PostedDate>
              </Post>
            ))}
          </div>
        </div>
      </section>
      <SocialCallout />
    </Layout>
  )
}

export default PostTemplate

export const POST_QUERY = graphql`
  query($_id: String!) {
    sanityPost(_id: { eq: $_id }) {
      title
      category
      excerpt
      postedDate(formatString: "MMM DD YYYY")
      _rawContent
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      author {
        email
        fName
        lName
        socials {
          link
          name
        }
        photo {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    allSanityPost(sort: { order: DESC, fields: postedDate }, limit: 3) {
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
        thumbnailImage {
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
