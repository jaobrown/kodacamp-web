import React from 'react'

export const FeatureList = ({ children }) => {
  return (
    <div className="grid mt-16 md:gap-x-10 gap-y-16 md:grid-cols-2 xl:gap-20">
      {children}
    </div>
  )
}
