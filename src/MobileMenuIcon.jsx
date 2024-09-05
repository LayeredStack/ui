import React from 'react'
import { Bars4Icon } from '@heroicons/react/24/solid'

export default function MobileMenuIcon(props) {
	return (
    <div className="ls_ui-mobile_menu_icon">
      {props.mobileMenuIcon !== undefined ?
        props.mobileMenuIcon
      :
        <Bars4Icon
          className="h-6 w-6"
        />
      }
    </div>
  )
}