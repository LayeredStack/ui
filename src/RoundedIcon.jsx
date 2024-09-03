import React from 'react'

export default function RoundedIcon(props) {
  const className = props.className ? `ls_ui-rounded_icon ${props.className}` : 'ls_ui-rounded_icon'
	return (
    <div className={className}>
      {props.text}
    </div>
  )
}