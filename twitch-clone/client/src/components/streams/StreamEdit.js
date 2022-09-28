import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream, updateStream } from '../../actions'
import StreamForm from './StreamForm'
import _ from 'lodash'

// react router needs components that work in isolation

const StreamEdit = (props) => {
	const { stream, fetchStream, updateStream } = props
	const id = props.match.params.id
	useEffect(() => {
		if (!stream) {
			fetchStream(id)
		}
	}, [stream, id, fetchStream])

	const onSubmit = (formValues) => {
		updateStream(id, formValues)
	}

	if (!stream) {
		return <div>Loading... </div>
	}

	return (
		<div>
			<h3>Stream Editor</h3>
			{/* initial values will look for properties with the same name as the name of each of the labels */}
			<StreamForm
				// This gives us the title and description values of the stream as a new object
				initialValues={_.pick(stream, 'title', 'description')}
				onSubmit={onSubmit}
			/>
		</div>
	)
}

const mapStateToProps = ({ streams }, ownProps) => {
	const id = ownProps.match.params.id
	return { stream: streams[id] }
}

export default connect(mapStateToProps, {
	fetchStream,
	updateStream,
})(StreamEdit)
