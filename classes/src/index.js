import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// classes must extend React.component
// must have a render method that renders jsx
// const App = () => {
// this gets the user location
// this gets returned after render
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => {
// 			console.log(position);
// 		},
// 		(err) => {
// 			console.log(err);
// 		}
// 	);
// 	return <div>Latitude: </div>;
// };

// state is an object that contains data relevant to a component
// state must be initialized when created
// state can only be updated with set state

// component lifecycle
//  constructor
//  render
//  componentDidMount(optional) is called when component is visible
//  componentDidUpdate(optional) is called when component updates
//  componentWillUnmount(optional) is called when component is removed
class App extends React.Component {
	state = { latitude: null, errorMessage: '' };
	// Initial data loading done here
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ latitude: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		// don't forget to not return with semicolon
		if (this.state.errorMessage && !this.state.latitude) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		// when this.state.latitude changes children re render
		if (!this.state.errorMessage && this.state.latitude) {
			return <SeasonDisplay latitude={this.state.latitude} />;
		}

		return <Spinner text="Getting location..." />;
	}
	// data loading when state is updated
	componentDidUpdate() {
		console.log('My component was updated');
	}

	// only return jsx
	// also try only having one return statement
	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
