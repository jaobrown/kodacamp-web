import React from 'react'

import LogoBanner from '@images/svg/logo-banner.svg'

export const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50">
      <div className="flex flex-col items-center justify-center">
        <img src={LogoBanner} alt="koda Logo" className="w-48 h-auto" />
        <small className="inline-block mt-4 text-base text-gray-800">&copy; Koda 2020</small>
      </div>
    </footer>
  )
}
