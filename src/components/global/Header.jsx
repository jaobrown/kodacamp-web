import React from 'react'

// assets
import Logo from '@images/svg/logo.svg'
import YouTube from '@images/svg/youtube-dark.svg'
import Instagram from '@images/svg/instagram-dark.svg'
import Twitter from '@images/svg/twitter-dark.svg'

export const Header = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-8 sm:p-12 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <a href="/" className="flex">
            <img className="w-auto h-12 sm:h-16" src={Logo} alt="Koda Logo" />
          </a>
        </div>
        <div className="flex items-center justify-end space-x-6 md:flex-1 lg:w-0">
          <a
            href="https://www.youtube.com/channel/UCRwBdKKHk3_ZxYjRzUWfxPw"
            className=""
            target="_blank"
            rel="nofollow noreferrer"
          >
            <img
              className="w-auto h-8 sm:h-8"
              src={YouTube}
              alt="Youtube Icon"
            />
          </a>
          <a
            href="//instagram.com/kodadevs"
            className=""
            target="_blank"
            rel="nofollow noreferrer"
          >
            <img
              className="w-auto h-8 sm:h-8"
              src={Instagram}
              alt="Instagram Icon"
            />
          </a>
          <a
            href="//twitter.com/kodadevs"
            className=""
            target="_blank"
            rel="nofollow noreferrer"
          >
            <img
              className="w-auto h-8 sm:h-8"
              src={Twitter}
              alt="Twitter Icon"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
