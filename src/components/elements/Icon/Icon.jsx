import React from 'react'

export const Icon = ({ icon, className }) => {
  switch (icon) {
    case 'arrow-up':
      return (
        <svg
        height="44"
        width="44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M22 36.667c-8.085 0-14.667-6.582-14.667-14.667S13.915 7.334 22 7.334 36.667 13.915 36.667 22 30.085 36.667 22 36.667zm0 3.667c10.12 0 18.333-8.214 18.333-18.334S32.12 3.667 22 3.667 3.667 11.88 3.667 22 11.88 40.334 22 40.334zM20.167 22v7.334h3.666V22h5.5L22 14.667 14.667 22h5.5z"
            fill="currentColor"
          />
        </svg>
      )

    default:
      return <div>Icon</div>
  }
}
