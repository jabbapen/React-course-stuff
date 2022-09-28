import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

const StreamList = ({
	streams,
	fetchStreams,
	currentUserId,
	isSignedIn,
}) => {
	useEffect(() => {
		fetchStreams()
	}, [fetchStreams])

	const renderAdmin = (stream) => {
		if (currentUserId && currentUserId === stream.userId) {
			return (
				<div className="right floated content">
					<Link
						to={`/streams/edit/${stream.id}`}
						className="ui button primary"
					>
						Edit
					</Link>
					<Link
						to={`/streams/delete/${stream.id}`}
						className="ui button negative"
					>
						Delete
					</Link>
				</div>
			)
		}
	}

	const renderCreate = () => {
		if (isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			)
		}
	}

	const renderedList = streams.map((stream) => {
		return (
			<div className="item" key={stream.id}>
				{renderAdmin(stream)}
				<i className="large middle aligned icon camera" />
				<div className="content">
					<Link to={`streams/${stream.id}`}>{stream.title}</Link>

					<div className="description">{stream.description}</div>
				</div>
			</div>
		)
	})

	return (
		<div>
			<h2>Streams</h2>
			<div className="ui celled list">{renderedList}</div>
			{renderCreate()}
		</div>
	)
}

const mapStateToProps = ({ streams, auth }) => {
	return {
		streams: Object.values(streams),
		currentUserId: auth.userId,
		isSignedIn: auth.isSignedIn,
	}
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
