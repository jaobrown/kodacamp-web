import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import { Layout } from '@global'
import { SocialCallout } from '@layouts'
import { SocialIcon, VideoPlayer } from '@elements'

const PostTemplate = ({ data }) => {
  const {
    title,
    excerpt,
    author,
    featuredImage,
    _rawContent,
    postedDate,
  } = data.sanityPost

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
              <h1 className="text-4xl font-bold leading-tight text-gray-900 ">
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
              fluid={featuredImage.asset.fluid}
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
      <SocialCallout />
    </Layout>
  )
}

export default PostTemplate

export const POST_QUERY = graphql`
  query($_id: String!) {
    sanityPost(_id: { eq: $_id }) {
      title
      excerpt
      postedDate(formatString: "MMM DD YYYY")
      _rawContent
      featuredImage {
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
  }
`
