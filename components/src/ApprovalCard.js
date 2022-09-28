import React from 'react';

const ApprovalCard = (props) => {
	// this has a children property that we access f
	console.log(props);
	return (
		<div className="ui card">
			{props.children}
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Decline</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
