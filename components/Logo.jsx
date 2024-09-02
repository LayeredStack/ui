import SquaredIcon from './SquaredIcon'

export default function Logo(props) {
	return (
    <div className="ls_ui-logo">
      <SquaredIcon text="LS" />
      {props.text}
    </div>
  )
}