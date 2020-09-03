import React from 'react'

export const Feature = ({ children }) => {
  return <div>{children}</div>
}

Feature.Heading = ({ children }) => {
  return (
    <h3 className="relative text-2xl font-bold leading-tight capitalize md:text-3xl">
      {children}
    </h3>
  )
}

Feature.Body = ({ children }) => {
  return <p className="mt-5 text-xl leading-relaxed">{children}</p>
}

Feature.Tag = ({ children }) => {
  return (
    <span className="absolute flex items-center justify-center h-6 px-2 text-sm font-bold leading-none tracking-wider text-teal-800 uppercase transform -translate-y-8 bg-teal-100 rounded-sm">
      {children}
    </span>
  )
}
