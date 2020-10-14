import React from 'react'
import { Link } from '@elements'

const TabLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      activeClassName="sm:border-gray-50 text-gray-900 sm:bg-white"
      className="pb-6 mx-3 font-bold tracking-wider text-gray-400 uppercase transition duration-75 transform sm:border-4 sm:border-b-0 sm:border-transparent sm:translate-y-1 sm:text-lg sm:pt-5 sm:px-12 sm:rounded-tl-lg sm:rounded-tr-lg sm:hover:text-gray-600"
    >
      {children}
    </Link>
  )
}

export const BlogNav = () => {
  return (
    <div className="px-4 mt-4 border-b-4 sm:mt-0 sm:px-0 border-gray-50">
      <nav className="flex justify-between max-w-4xl mx-auto overflow-x-scroll sm:overflow-x-visible sm:overflow-y-visible">
        <span className="mr-6 font-bold tracking-wider text-gray-900 uppercase sm:hidden">
          Category:
        </span>
        <TabLink to="/blog/">All</TabLink>
        <TabLink to="/blog/development">Development</TabLink>
        <TabLink to="/blog/design">Design</TabLink>
      </nav>
    </div>
  )
}
