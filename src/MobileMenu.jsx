// React
import React from 'react'

// Packages
import Navigation from './Navigation'

export default function MobileMenu(props) {
  const className = `ls_ui-mobile-menu ${props.isOpen ? 'open' : ''}`

  return (
    <div className={className}>
      <Navigation useTheme={props.useTheme} />
    </div>
  )
}