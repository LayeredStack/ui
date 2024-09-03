import React from 'react'

import SquaredIcon from './SquaredIcon'

export default function Logo(props) {
	return (
    <div className="ls_ui-logo">
      <SquaredIcon
        text={props.metadata.initials}
      />
      {props.metadata.title}
    </div>
  )
}