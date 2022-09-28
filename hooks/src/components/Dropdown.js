import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
	const [open, setOpen] = useState(false)
	const ref = useRef()
	// useRef allows us to get direct access to a dom element
	// just use ref={refname} in any element you want to have access to
	// use ref.current to access the content of the element

	useEffect(() => {
		// if the event listender is wired up using addEventListener this listener will be run first
		const onBodyClick = (e) => {
			// contains check if event.target is inside of the component
			// this method is in all dom elements
			if (ref.current.contains(e.target)) {
				return
			}

			setOpen(false)
		}

		document.body.addEventListener('click', onBodyClick, {
			capture: true,
		})

		return () => {
			document.body.removeEventListener('click', onBodyClick, {
				capture: true,
			})
		}
	}, [])

    
	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => {
					onSelectedChange(option)
				}}
			>
				{option.label}
			</div>
		)
	})

	return (
		<div className="ui form" ref={ref}>
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => {
						setOpen(!open)
					}}
					className={`ui selection dropdown ${
						open ? 'visible active' : ''
					}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown

// event bubbling is where when an event is created it is passed
// to its parent components and if they have an event of the same
// type theirs will be called as well
