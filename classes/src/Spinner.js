import React from 'react';

const Spinner = (props) => {
	return (
		<div class="ui active dimmer">
			<div class="ui text loader">{props.text}</div>
		</div>
	);
};

// use this to define default props
Spinner.defaultProps = {
	text: 'Loading...',
};

export default Spinner;
