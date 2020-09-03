import React from 'react'

import { Layout } from '@global'
import { Hero, Features, SocialCallout } from '@layouts'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <SocialCallout />
    </Layout>
  )
}

export default IndexPage
