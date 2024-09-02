import Menu from './Menu'
import MobileMenuSwitcher from './MobileMenuSwitcher'
import RoundedIcon from './RoundedIcon'

export default function UserMenu() {
	return (
    <div className="ls_ui-user_menu">
      <Menu />
      <RoundedIcon text="TG" />
      <MobileMenuSwitcher />
    </div>
  )
}