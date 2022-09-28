import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
	const title = video.snippet.title
	const thumbnail = video.snippet.thumbnails.medium.url

	return (
		<div className="item video-item" onClick={() => onVideoSelect(video)}>
			<img src={thumbnail} alt={title} className="ui image" />
			<div className="content">
				<div className="header">{title}</div>
			</div>
		</div>
	)
}

export default VideoItem
