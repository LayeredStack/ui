import Image from 'next/image'
import Logo from './Logo'
import UserMenu from './UserMenu'

export default function Header(props) {
	return (
		<header className="ls_ui-header">
			{props.logoDark && props.logoLight ?
				<div className="ls_ui-logo">
					<Image className="ls_ui-logo-dark" src={props.logoDark} width={144} height={26} alt="Logo (Dark)" />
					<Image className="ls_ui-logo-light" src={props.logoLight} width={144} height={26} alt="Logo (Light)" />
				</div>

			:
				<Logo text="Layered Stack UI" />
			}

			<UserMenu />
		</header>
	)
}