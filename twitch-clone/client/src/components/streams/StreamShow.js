import React, { useEffect, useRef, useState } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
	const { fetchStream, stream } = props
	const { id } = props.match.params
	const [didMount, setDidMount] = useState(false)

	const videoRef = useRef()

	useEffect(() => {
		fetchStream(id)
		setDidMount(true)
	}, [fetchStream, id])

	useEffect(() => {
		if (didMount && stream) {
			console.log('render')
			const player = flv.createPlayer({
				type: 'flv',
				url: `http://localhost:8000/live/${id}.flv`,
			})
			player.attachMediaElement(videoRef.current)
			player.load()

			return () => {
				player.destroy()
			}
		} else {
			setDidMount(true)
		}
	}, [didMount, id, stream])

	if (!stream) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<video ref={videoRef} style={{ width: '100%' }} controls />
			<h1>{stream.title}</h1>
			<h5>{stream.description}</h5>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow)
