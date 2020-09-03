import React from 'react'

// components
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  )
}
