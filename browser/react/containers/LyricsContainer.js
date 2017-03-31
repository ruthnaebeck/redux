import React, { Component } from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics'

export default class LyricsContainer extends Component {
	constructor() {
		super()
		this.state = Object.assign({
						artistQuery: '',
						songQuery: '', 
					}, store.getState());

		this.setArtist = this.setArtist.bind(this)
		this.setSong = this.setSong.bind(this)
		this.handleSubmit = this.handleSubmit(this)
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	setArtist(artist) {
		this.setState({artistQuery: artist})
	}

	setSong(song) {
		this.setState({songQuery: song})
	}

	handleSubmit() {
		console.log('this state from handleSubmit is', this.state)
	}

	render() {
		return (
			<div>
				<Lyrics text={this.state.text}
						setArtist={this.setArtist}
						setSong={this.setSong}
						artistQuery={this.state.artistQuery}
						songQuery={this.state.songQuery}
						handleSubmit={this.handleSubmit}
				/>
			</div> )
	}
}
