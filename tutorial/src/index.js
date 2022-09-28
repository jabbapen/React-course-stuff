// import the React and ReactDOM libraries
// import anyVariable from dependency/path
// import uses ES2015 modules rules
// require uses common JS modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create a react components
const App = () => {
	const buttonText = { text: 'Click me' };

	return (
		<div>
			<label htmlFor="name" className="label">
				Enter Name:
			</label>
			<input type="text" id="name" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{buttonText.text}
			</button>
		</div>
	);
};
// you need to provide a js object when styling in jsx
// remove dashes and use camelCase
// Take the react component and show it on the screen
// we use className instead of class because class already exists in js bbut this might change cause js is smart enough to detect this
// jsx can't render an object
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
