import React from 'react';

const CommentDetail = (props) => {
	return (
		<div
			className="ui container comments"
			style={{
				padding: '1rem 1rem 0rem 1rem',
			}}
		>
			<div className="comment">
				<a href="/" className="avatar">
					<img src={props.avatarLink} alt="avatar" />
				</a>
				<div className="content">
					<a href="/" className="author">
						{props.author}
					</a>
					<div className="metadata">
						<span className="date"> {props.timeAgo}</span>
					</div>
					<div className="text">{props.commentText}</div>
				</div>
			</div>
		</div>
	);
};

export default CommentDetail;
