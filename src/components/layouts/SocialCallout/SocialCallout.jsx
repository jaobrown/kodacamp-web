import React from 'react'

// assets
import YouTube from '@images/svg/youtube-teal.svg'
import Instagram from '@images/svg/instagram-teal.svg'
import Twitter from '@images/svg/twitter-teal.svg'

export const SocialCallout = () => {
  return (
    <section className="px-4 py-24 text-white lg:py-32 sm:px-10">
      <div className="p-16 mx-auto bg-gray-800 rounded-md lg:px-8 lg:py-12 max-w-screen-2xl">
        <h2 className="text-4xl font-bold leading-snug text-center">
          Find your place in the community
        </h2>
        <div className="grid max-w-6xl gap-8 mx-auto mt-12 lg:grid-cols-3">
          <a
            href="https://www.youtube.com/channel/UCRwBdKKHk3_ZxYjRzUWfxPw"
            class="flex justify-center hover:bg-gray-700 p-4 rounded-md transition duration-75"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10">
                <img
                  className="w-auto h-8 sm:h-10"
                  src={YouTube}
                  alt="YouTube Icon"
                />
              </div>
            </div>
            <div class="ml-8">
              <h3 className="relative text-3xl font-bold leading-tight capitalize">
                YouTube
              </h3>
              <p className="w-48 mt-5 text-xl leading-relaxed">
                Helpful videos and mini courses
              </p>
            </div>
          </a>
          <a
            href="//instagram.com/kodadevs"
            class="flex justify-center hover:bg-gray-700 p-4 rounded-md transition duration-75"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10">
                <img
                  className="w-auto h-8 sm:h-10"
                  src={Instagram}
                  alt="Instagram Icon"
                />
              </div>
            </div>
            <div class="ml-8">
              <h3 className="relative text-3xl font-bold leading-tight capitalize">
                Instagram
              </h3>
              <p className="w-48 mt-5 text-xl leading-relaxed">
                Code snippets and updates
              </p>
            </div>
          </a>
          <a
            href="//twitter.com/kodadevs"
            class="flex justify-center hover:bg-gray-700 p-4 rounded-md transition duration-75"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10">
                <img
                  className="w-auto h-8 sm:h-10"
                  src={Twitter}
                  alt="Twitter Icon"
                />
              </div>
            </div>
            <div class="ml-8">
              <h3 className="relative text-3xl font-bold leading-tight capitalize">
                Twitter
              </h3>
              <p className="w-48 mt-5 text-xl leading-relaxed">
                Thoughts, feelings, and antics
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
