import React from 'react'
import Img from 'gatsby-image'
import { Tag, Link } from '@elements'

export const FeaturedPost = ({ to, fluid, children }) => {
  return (
    <article className="md:col-span-2 xl:col-span-3">
      <Link
        to={to}
        className="grid grid-cols-1 p-5 transition duration-75 rounded-md xl:grid-cols-2 hover:bg-gray-50"
      >
        <Img fluid={fluid} />
        <div className="flex flex-col justify-center xl:pl-16">{children}</div>
      </Link>
    </article>
  )
}

FeaturedPost.Tag = ({ category, children }) => {
  let color = ''
  switch (category) {
    case 'development':
      color = 'teal'
      break
    case 'design':
      color = 'orange'
      break
    default:
      break
  }
  return (
    <Tag color={color} className="mt-8 xl:mt-0">
      {children}
    </Tag>
  )
}

FeaturedPost.Title = ({ children }) => {
  return (
    <h3 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
      {children}
    </h3>
  )
}

FeaturedPost.Excerpt = ({ children }) => {
  return (
    <p className="max-w-lg mt-3 text-lg font-light leading-7">{children}</p>
  )
}

FeaturedPost.Author = ({ to, fluid, children }) => {
  return (
    <Link to={to} className="mt-7">
      <Img fluid={fluid} className="hidden w-10 h-10 rounded-full md:block" />
      <p className="text-lg font-bold text-gray-900 md:mt-1">{children}</p>
    </Link>
  )
}

FeaturedPost.PostedDate = ({ children }) => {
  return <div className="text-sm font-light text-gray-900">{children}</div>
}
