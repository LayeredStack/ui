// React
import React from 'react'

// Components
import Menu from './Menu'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navigation(props) {
	return (
    <>
      <div>
        <h1>Menu</h1>
        <Menu />
      </div>

      <ThemeSwitcher useTheme={props.useTheme} />
    </>
  )
}