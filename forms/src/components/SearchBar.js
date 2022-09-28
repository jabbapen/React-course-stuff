import React from 'react'

class SearchBar extends React.Component {
	state = {
		searchInput: '',
	}

	// This is one way to fix the this problem as bind makes it so whenever the function is called it'll have the correct value of 'this'
	// constructor(props) {
	// 	super()
	// 	//
	// 	this.onFormSubmit = this.onFormSubmit.bind(this)
	// }
	// regular functions make this mean whoever calls the function
	// arrow functions make this whowever owns the function
	onFormSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state.searchInput)
	}

	// onChange is called when a user changes text in text input
	// onSubmit is called on a form when it is submitted

	// We don't want to store values in the dom so we want to give the input the value based on the states

	// think of this as the value left of the dot
	render() {
		return (
			<div className="ui segment search-bar">
				{/* when onSubmit is called the callback is not called with 'this' so 'this' is undefined */}
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.searchInput}
							onChange={(e) => this.setState({ searchInput: e.target.value })}
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
