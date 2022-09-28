import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../slices/authSlice'

// to start a debug_session with ?debug_session=<some_string> to make it so redux devtools save data on refresh
class GoogleAuth extends React.Component {
	componentDidMount() {
		// gapi.load(api, callback when load complete)
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'540378472549-b9bvq1o4r0t5pvip4c9occra7e2dbd59.apps.googleusercontent.com',
					scope: 'email',
					plugin_name: 'twitch-clone',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance()

					this.onAuthChange(this.auth.isSignedIn.get())
					this.auth.isSignedIn.listen(this.onAuthChange)
				})
		})
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId())
		} else {
			this.props.signOut()
		}
	}

	onSignInClick = () => {
		this.auth.signIn()
	}

	onSignOutClick = () => {
		this.auth.signOut()
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null
		} else if (this.props.isSignedIn) {
			return (
				<div
					onClick={this.onSignOutClick}
					className="ui red google button"
				>
					<i className="google icon" />
					Sign Out
				</div>
			)
		} else {
			return (
				<div
					onClick={this.onSignInClick}
					className="ui red google button"
				>
					<i className="google icon" />
					Sign In with Google
				</div>
			)
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = (state) => ({
	isSignedIn: state.auth.isSignedIn,
})

export default connect(mapStateToProps, { signIn, signOut })(
	GoogleAuth
)
