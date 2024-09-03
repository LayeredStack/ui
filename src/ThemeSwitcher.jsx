'use client'
import React from 'react'

import { useState, useEffect } from 'react'

export default function ThemeSwitcher(props) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = props.useTheme()

    useEffect(() => {
			setMounted(true)
    }, [])

    if (!mounted) {
			return null
    }

    const handleChange = (event) => {
      setTheme(event.target.value)
    }

    return (
			<div>
				<select
					className="ls_ui-theme-switcher"
					onChange={handleChange}
					value={theme} >
						<option value="light">Light</option>
						<option value="dark">Dark</option>
						<option value="system">System</option>
				</select>
			</div>
    )
}