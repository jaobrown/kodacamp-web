import React from 'react'

import { Layout, SEO } from '@global'
import { Hero, Features, SocialCallout } from '@layouts'

const NotFoundPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Features />
        <SocialCallout />
      </Layout>
    </>
  )
}

export default NotFoundPage
