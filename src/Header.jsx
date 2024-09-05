import React from 'react'

import Image from 'next/image'
import Logo from './Logo'
import UserMenu from './UserMenu'

export default function Header(props) {
	return (
		<header className="ls_ui-header">
			{props.logoDark && props.logoLight ?
				<div className="ls_ui-logo">
					<Image
						alt="Logo (Dark)"
						className="ls_ui-logo-dark"
						height={26}
						src={props.logoDark}
						width={144}
					/>

					<Image
						alt="Logo (Light)"
						className="ls_ui-logo-light"
						height={26}
						src={props.logoLight}
						width={144}
					/>
				</div>
			:
				<Logo
					metadata={props.metadata}
					text={props.metadata.name}
				/>
			}

			<UserMenu
				mobileMenuIcon={props.mobileMenuIcon}
				mobileMenuOpen={props.mobileMenuOpen}
				toggleMobileMenu={props.toggleMobileMenu}
				user={props.user}
			/>
		</header>
	)
}