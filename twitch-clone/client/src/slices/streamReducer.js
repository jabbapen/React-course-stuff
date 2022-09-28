/* eslint-disable import/no-anonymous-default-export */
import {
	CREATE_STREAM,
	FETCH_STREAM,
	UPDATE_STREAM,
	DELETE_STREAM,
	FETCH_STREAMS,
} from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
		case UPDATE_STREAM:
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		case DELETE_STREAM:
			return _.omit(state, action.payload)
		case FETCH_STREAMS:
			// use lodash mapKeys(array, property) which makes a new object with the elemnts of the array (all of which
			return { ...state, ..._.mapKeys(action.payload, 'id') }
		default:
			return state
	}
}
