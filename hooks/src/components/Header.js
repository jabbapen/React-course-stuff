import React from 'react'
import Link from './Link'

const Header = () => {
	// this approach is bad because it does a  hard reload
	return (
		<div className="ui secondary pointing menu">
			<Link href="/" className="item">
				Accordion
			</Link>
			<Link href="/search" className="item">
				Search
			</Link>
			<Link href="/dropdown" className="item">
				Dropdown
			</Link>
			<Link href="/translate" className="item">
				Translate
			</Link>
		</div>
	)
}

export default Header
