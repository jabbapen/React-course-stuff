import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

const UserHeader = ({ user }) => {
	if (!user) {
		return null
	}

	return <div className="header">{user.name}</div>
}

// use for logic
// map state gets a second argument ownProps which are props about to be sent to component
const mapStateToProps = ({ users }, { userId }) => {
	const user = users.find((user) => user.id === userId)

	return { user }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)
