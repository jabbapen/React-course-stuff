import { combineReducers } from 'redux'

const songsReducer = () => {
	return [
		{ title: 'DAMN', duration: '4:05' },
		{ title: 'All Star', duration: '3:15' },
		{ title: 'No Scrubs', duration: '8:12' },
		{ title: 'I Want it That Way', duration: '2:09' },
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	}

	return selectedSong
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
})
