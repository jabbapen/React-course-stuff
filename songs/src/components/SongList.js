import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			)
		})
	}
	render() {
		// this.props === {songs: state.songs}
		return <div className="ui divided list">{this.renderList()}</div>
	}
}

// this will get our store and we can take some stuff out of it and connect will store it in our songlist
const mapStateToProps = (state) => {
	console.log(state)
	// we also get a dispatch function
	return { songs: state.songs }
}
// actions are objects with a type and a payload
// connect(stuffWeWantToAddToProps, actionCreator)(component)
// The reason you need to add the actions here is because we need to wire them up to redux so they can essentially make them a dispatch function
export default connect(mapStateToProps, { selectSong })(SongList)
