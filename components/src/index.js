import React from 'react';
import ReactDOM from 'react-dom/client';
// no .js extension needed
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from '@faker-js/faker';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="pieter"
					timeAgo="Yesterday at 6:00PM"
					commentText="POGGERS!!"
					avatarLink={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="bill"
					timeAgo="Yesterday at 9:00PM"
					commentText="POGGERS!"
					avatarLink={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="sam"
					timeAgo="Today at 4:45PM"
					commentText="Hello there!"
					avatarLink={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};
const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<App />);
