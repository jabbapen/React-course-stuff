/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload
		default:
			return state
	}
}

// reducer is automatically called at initialization
// reducer must return a value that isn't undefined
// reducer must produce a value based on previous state an action
// first reducer argument is the previous state which is initially undefined and is set to the return value of the last time it was ran
// second is action
// Reducers must be pure meaning that they can't do things like api request and anything external
// must not mutate the state argument
// ^ is wrong and actually there is only one corner case
// basically we should never return the state variable itself after you mutate it because your application won't update because it has the same address
// strings are immutable so if reducer returns a string don't worry about mutability rules

// to remove a property do _.omit(property, object) which is from the lodash library
