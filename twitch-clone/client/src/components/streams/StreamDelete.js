import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = (props) => {
	const { fetchStream, deleteStream, stream } = props
	const id = props.match.params.id

	useEffect(() => {
		fetchStream(id)
	}, [fetchStream, id])

	const actions = (
		<>
			<button
				className="ui negative button"
				onClick={() => {
					deleteStream(id)
				}}
			>
				Delete
			</button>
			<Link to="/" className="ui button">
				Cancel
			</Link>
		</>
	)

	const renderContent = () => {
		if (!stream) {
			return 'Are you sure you want to delete this stream?'
		}
		return `Are you sure you want to delete the stream with title: ${stream.title}`
	}

	return (
		<Modal
			title="Delete Stream"
			content={renderContent()}
			actions={actions}
			onDismiss={() => history.push('/')}
		/>
	)
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {
	fetchStream,
	deleteStream,
})(StreamDelete)
