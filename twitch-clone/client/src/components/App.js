import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'
import StreamEdit from './streams/StreamEdit'
import history from '../history'
import '../style/App.css'
import Header from './Header'

// client-id: 540378472549-b9bvq1o4r0t5pvip4c9occra7e2dbd59.apps.googleusercontent.com
// how anchor tag naviagtion works
// request is made to localhost:3000/name
// we get back index.html
// all of the old html file is dumped meaning all of our React/Redux data is dumped
// we execute are script tags again

// single page app means there is only one html file but we just show and hide different components

// how link tags works
// user clicks Link tag
// react router prevents navigation to new route
// url still changes
// History is updated

const App = () => {
	// react rounter only cares about path after '/'
	// different routes can be matched by the same url
	// matching path is done by contains rather than matches so /page will match with the path /
	// to avoid this use exact

	// routers (this matters for deployment)
	// browser router uses everything after the top level domain or (.com, .net) or port as the path
	// hash router uses everything after # as a path and basically injects # after /
	// ^ is useful because it doesn't show the path to the backend server but instead just the client
	// ^ use above for Github pages
	// memory router doesn't change url

	// traditional server if you make a request to an undefined route it will respond with 404
	// If react doesn't find a route it just returns index.html which is problematic as webservers don't generally do this as they respond with 404

	// OAuth is for logging in with outside service providers (we're basically using some other platforms login platform)
	// also for making actions on the users behalf
	// scopes are the list of permissions you are granting to the user

	// Oauth for servers when you need to access there data when they are not logged in
	// OAuth for browser apps when we only need to access user data when they are logged in

	return (
		<div className="ui container">
			{/* This will make router use your history object */}
			<Router history={history}>
				<Header />
				{/* This makes it so only one route can be shown */}
				<Switch>
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route
						// : makes it so anything can be typed in and it will be a variable
						// to do multiple variables do :id/:name
						path="/streams/edit/:id"
						exact
						component={StreamEdit}
					/>
					<Route
						path="/streams/delete/:id"
						exact
						component={StreamDelete}
					/>
					<Route path="/streams/:id" exact component={StreamShow} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
