import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

const formWrapped = ({ createStream }) => {
	return (
		<div>
			<h3>Create a stream</h3>
			<StreamForm onSubmit={createStream} />
		</div>
	)
}

export default connect(null, {
	createStream,
})(formWrapped)
