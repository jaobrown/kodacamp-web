import React from 'react'
import { SocialIcon, Link } from '@elements'
// assets
import Logo from '@images/svg/logo.svg'

export const Header = () => {
  return (
    <div className="relative text-gray-900">
      <div className="flex items-center justify-between px-4 py-8 sm:p-12 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <Link to="/" className="flex w-24">
            <img className="w-auto h-12 sm:h-16" src={Logo} alt="Koda Logo" />
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <Link
            to="/blog/"
            className="mr-4 text-xl font-bold"
            activeClassName="text-orange-500"
            partiallyActive
            target="_blank"
            rel="nofollow noreferrer"
          >
            Blog
          </Link>
          <a
            href="https://www.youtube.com/channel/UCRwBdKKHk3_ZxYjRzUWfxPw"
            className=""
            target="_blank"
            rel="nofollow noreferrer"
          >
            <SocialIcon platform="youtube" className="w-auto h-6 sm:h-6" />
          </a>
          <a
            href="//instagram.com/kodadevs"
            className=""
            target="_blank"
            rel="nofollow noreferrer"
          >
            <SocialIcon platform="instagram" className="w-auto h-6 sm:h-6" />
          </a>
          <a
            href="//twitter.com/kodadevs"
            className=""
            target="_blank"
            rel="nofollow noreferrer"
          >
            <SocialIcon platform="twitter" className="w-auto h-6 sm:h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}
