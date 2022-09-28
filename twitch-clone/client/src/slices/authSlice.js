import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null,
}
/* eslint-disable import/no-anonymous-default-export */
const AuthSlice = createSlice({
	name: 'auth',
	initialState: INITIAL_STATE,
	reducers: {
		signIn: {
			reducer(state, action) {
				state.isSignedIn = true
				state.userId = action.payload.userId
			},
			prepare(id) {
				return {
					payload: {
						userId: id,
					},
				}
			},
		},
		signOut: {
			reducer(state) {
				state.isSignedIn = false
				state.userId = null
			},
		},
	},
})

export const { signIn, signOut } = AuthSlice.actions

export default AuthSlice.reducer
// (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case SIGN_IN:
// 			return {
// 				...state,
// 				isSignedIn: true,
// 				userId: action.payload.userId,
// 			}
// 		case SIGN_OUT:
// 			return { ...state, isSignedIn: false, userId: null }
// 		default:
// 			return state
// 	}
// }
