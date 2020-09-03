import React from 'react'

// assets
import Mountains from '@images/svg/mountains.svg'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative pt-10">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6">
          <div className="text-center">
            <h1 className="max-w-3xl mx-auto text-4xl font-bold leading-10 text-gray-900 sm:text-4xl sm:leading-none md:text-5xl lg:text-6xl">
              Adventures in web design and development
            </h1>
            <p className="max-w-sm mx-auto mt-3 text-xl text-gray-900 sm:text-lg md:mt-8 md:text-2xl lg:text-3xl md:max-w-2xl">
              Nothing here is the “secret sauce”—but it’s also probably not all
              in the docs either
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={Mountains}
          alt="Mountain illustration"
          className="w-screen h-auto"
        />
      </div>
    </section>
  )
}
