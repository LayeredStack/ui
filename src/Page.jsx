import React from 'react'

import Header from './Header'
import Menu from './Menu'
import ThemeSwitcher from './ThemeSwitcher'

export default function Page({ children, ...props }) {
	return (
    <main>
      <Header
        logoDark={props.logoDark}
        logoLight={props.logoLight}
        metadata={props.metadata}
        mobileMenuIcon={props.mobileMenuIcon}
        user={props.user}
      />

      <div className="ls_ui-page">
        <aside className="ls_ui-navigation">
          <div>
            <h1>Menu</h1>
            <Menu />
          </div>

          <ThemeSwitcher
            useTheme={props.useTheme}
          />
        </aside>

        <div className="ls_ui-content">
          <div className="ls_ui-content_container">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}