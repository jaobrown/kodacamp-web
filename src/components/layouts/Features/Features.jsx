import React from 'react'

// components
import { FeatureList } from './FeatureList/FeatureList'
import { Feature } from './Feature/Feature'

// assets
import Campsite from '@images/svg/campsite.svg'

export const Features = () => {
  return (
    <section>
      <div className="px-4 pt-10 sm:px-10">
        <div className="grid mx-auto max-w-screen-2xl lg:grid-cols-12 gap-x-4">
          <div className="col-span-7 p-10 rounded-md sm:p-16 bg-gray-50">
            <h2 className="text-2xl font-bold leading-snug text-orange-500 md:text-4xl">
              Tutorials to guide your exploration in the world wide web of the
              Jamstack
            </h2>
            <p className="mt-5 text-xl leading-relaxed">
              Koda provides approachable, intermediate Javascript and CSS
              tutorials for people who want to build better things. There’s no
              shortage of tools for the job, just how they work together.{' '}
            </p>
            <FeatureList>
              <Feature>
                <Feature.Heading>Cool Tech</Feature.Heading>
                <Feature.Body>
                  A lot of a pieces make up the Jamstack—learn how to use tools
                  that you’ll love
                </Feature.Body>
              </Feature>
              <Feature>
                <Feature.Heading>Good Design</Feature.Heading>
                <Feature.Body>
                  Learn to design while you build things—useful, useable and
                  desireable things
                </Feature.Body>
              </Feature>
              <Feature>
                <Feature.Heading>Big (ish) Projects</Feature.Heading>
                <Feature.Body>
                  You don’t need a 36 hour course—but maybe you need to connect
                  some dots
                </Feature.Body>
              </Feature>
              <Feature>
                <Feature.Heading>
                  <Feature.Tag>new</Feature.Tag>
                  Growing Community
                </Feature.Heading>
                <Feature.Body>
                  We want to make a place for developers to learn together
                </Feature.Body>
              </Feature>
            </FeatureList>
          </div>
          <div className="hidden col-span-5 lg:flex">
            <img
              src={Campsite}
              alt="Illustration of camp site"
              className="w-full h-auto max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
