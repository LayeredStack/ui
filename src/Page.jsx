'use client'

// React
import React, { useState, useEffect } from 'react'

// Components
import Backend from './Backend'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Navigation from './Navigation'

export default function Page({ children, ...props }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState)
  }

	return (
    <main>
      <Header
        logoDark={props.logoDark}
        logoLight={props.logoLight}
        metadata={props.metadata}
        mobileMenuIcon={props.mobileMenuIcon}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        user={props.user}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        useTheme={props.useTheme}
      />

      <div className="ls_ui-page">
        <aside className="ls_ui-navigation">
          <Navigation useTheme={props.useTheme} />
        </aside>

        <div className="ls_ui-content">
          <div className="ls_ui-content_container">
            {children}

            {props.backendUrl !== undefined &&
              <section>
                <Backend url={props.backendUrl} />
              </section>
            }
          </div>
        </div>
      </div>
    </main>
  )
}