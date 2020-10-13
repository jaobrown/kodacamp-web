import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  kind,
  className,
  ...other
}) => {
  // Tailwind classes for button or links
  const buttonClasses = ``
  const linkClasses = ``

  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
        className={`inline-block transition duration-75 ${
          kind === `button` ? buttonClasses : kind === `link` ? linkClasses : ``
        } ${className ? className : ''}`}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      href={to}
      {...other}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${
        kind === `button` ? buttonClasses : kind === `link` ? linkClasses : ``
      }${className} transition duration-150`}
    >
      {children}
    </a>
  )
}
