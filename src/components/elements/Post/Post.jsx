import React from 'react'
import Img from 'gatsby-image'

import { Link, Tag } from '@elements'

export const Post = ({ to, fluid, children }) => {
  return (
    <Link
      to={to}
      className="p-5 transition duration-75 rounded-md hover:bg-gray-50"
    >
      <article>
        <Img fluid={fluid} className="" />
        {children}
      </article>
    </Link>
  )
}

Post.Tag = ({ category, children }) => {
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
    <Tag color={color} className="mt-8">
      {children}
    </Tag>
  )
}

Post.Title = ({ children }) => {
  return (
    <h3 className="mt-3 text-3xl font-bold leading-tight text-gray-900">
      {children}
    </h3>
  )
}

Post.Excerpt = ({ children }) => {
  return (
    <p className="max-w-lg mt-3 text-lg font-light leading-7">{children}</p>
  )
}

Post.Author = ({ children }) => {
  return <p className="text-lg font-bold text-gray-900 mt-7">{children}</p>
}

Post.PostedDate = ({ children }) => {
  return <div className="text-sm font-light text-gray-900">{children}</div>
}
