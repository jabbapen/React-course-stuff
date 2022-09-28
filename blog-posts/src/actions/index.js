import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

// middleware allows for asynchronous action creators
// dispatch is sent to middlewares before reducers
export const fetchPosts = () => async (dispatch) => {
	// remember to get data out of response
	const response = await jsonPlaceholder.get('/posts')
	dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

// middlewares
// called for every action
// stop, modify, or do basically anything with an action
//

// action creators
// must return an object with a type and a optional payload

// redux thunk allows for you to return function from a action creator and if you do
// process
// 1. if is not function go as normal otherwise go to 2.
// 2. we will call the function with dispatch and getState is passed in
// 3. once the request is finished we manually dispatch action

// _.memoize(func) produces a new function that can only be called once with an argument and then it will store it in cache
// use _ to show others this is meant to be private
// to memoize seperate memoized logic outside function and memoize that function
// This is problematic because you can't get a user multiple times

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`)

	dispatch({ type: 'FETCH_USER', payload: response.data })
}

// since fetchUser and fetchPosts return functions we must dispatch them
export const fetchPostsAndUsers =
	() => async (dispatch, getState) => {
		// This means to wait until action creator finishes because it is asynchronous
		await dispatch(fetchPosts())
		// uniq returns an array with unique ids
		// const userIds = _.uniq(
		// 	// 'userId is the same as (post) => post.userId
		// 	_.map(getState().posts, 'userId')
		// )

		// async doesn't work with for each
		// userIds.forEach((userId) => dispatch(fetchUser(userId)))

		// alternate way that basically work by piping the result of each to the next function
		_.chain(getState().posts)
			.map('userId')
			.uniq()
			.forEach((userId) => dispatch(fetchUser(userId)))
			.value()

		// if you were to wait for all of these you would do something like Promise.all(userIds.map(() => dispatch(fetchUser(userId))))
	}
