import React from 'react'

const Context = React.createContext('english')

// if you make two seperate providers they are not linked together.

export class LanguageStore extends React.Component {
	state = { language: 'english' }

	onLanguageChange = (language) => {
		this.setState({ language })
	}

	render() {
		return (
			<Context.Provider
				value={{
					...this.state,
					onLanguageChange: this.onLanguageChange,
				}}
			>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export default Context
