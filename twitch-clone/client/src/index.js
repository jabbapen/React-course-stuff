import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './components/App'
import authSlice from './slices/authSlice'
import streamReducer from './slices/streamReducer'
import { reducer as formReducer } from 'redux-form'

const store = configureStore({
	reducer: {
		auth: authSlice,
		form: formReducer,
		streams: streamReducer,
	},
})

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)

// install react-router-dom not react-router because it's the logic
// react-router-native is for mobile
// react-router-redux is for redux (ignore this exists for the most part)
