import React from 'react'
import { Bars4Icon } from '@heroicons/react/24/solid'
import { XCircleIcon } from '@heroicons/react/24/outline'

export default function MobileMenuIcon(props) {
	return (
    <a onClick={() => props.toggleMobileMenu()} className="ls_ui-mobile_menu_icon">
      {props.mobileMenuIcon !== undefined ?
        props.mobileMenuIcon
      :
        <>
          {props.mobileMenuOpen ?
            <XCircleIcon
              className="h-6 w-6"
            />
          :
            <Bars4Icon
              className="h-6 w-6"
            />
          }
        </>
      }
    </a>
  )
}