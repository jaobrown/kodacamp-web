import React from 'react'

export const Tag = ({ color, className, children }) => {
  let colorClasses = ''

  switch (color) {
    case 'red':
      colorClasses = 'bg-red-50 text-red-800'
      break
    case 'teal':
      colorClasses = 'text-teal-800 bg-teal-100'
      break

    default:
      colorClasses = 'text-gray-800 bg-gray-100'
      break
  }

  return (
    <span
      className={`flex items-center max-w-min-content justify-center h-6 px-2 text-sm font-bold leading-none tracking-wider uppercase rounded-sm ${colorClasses} ${className}`}
    >
      {children}
    </span>
  )
}
