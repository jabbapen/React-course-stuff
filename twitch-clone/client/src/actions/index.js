import streams from '../apis/streams'
import history from '../history'
import {
	CREATE_STREAM,
	FETCH_STREAM,
	UPDATE_STREAM,
	DELETE_STREAM,
	FETCH_STREAMS,
} from './types'

export const createStream =
	(formValues) => async (dispatch, getState) => {
		const { userId } = getState().auth
		const response = await streams.post('/streams', {
			...formValues,
			userId,
		})
		dispatch({ type: CREATE_STREAM, payload: response.data })
		// programatic navigation is where you navigate to a new url automatically
		// this is all you need to do to navigate to a new page
		history.push('/')
	}

export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get('/streams')

	dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`)

	dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const updateStream = (id, formValues) => async (dispatch) => {
	// put replaces everything so use patch instead
	const response = await streams.patch(`/streams/${id}`, formValues)

	dispatch({ type: UPDATE_STREAM, payload: response.data })
	history.push('/')
}

export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`)

	dispatch({ type: DELETE_STREAM, payload: id })
	history.push('/')
}
