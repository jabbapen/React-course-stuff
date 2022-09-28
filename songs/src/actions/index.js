// naming this index.js allows us to import by doing /actions and not specifying a filename

export const selectSong = (song) => {
	return {
		type: 'SONG_SELECTED',
		payload: song,
	}
}
