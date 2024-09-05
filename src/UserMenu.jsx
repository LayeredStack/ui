import React from 'react'

import Menu from './Menu'
import RoundedIcon from './RoundedIcon'
import MobileMenuIcon from './MobileMenuIcon'

export default function UserMenu(props) {
	return (
    <div className="ls_ui-user_menu">
      <Menu />

      <RoundedIcon
        className="ls_ui-user_icon"
        text={props.user.initials}
      />

      <MobileMenuIcon
        mobileMenuIcon={props.mobileMenuIcon}
        mobileMenuOpen={props.mobileMenuOpen}
        toggleMobileMenu={props.toggleMobileMenu}
      />
    </div>
  )
}