import React from 'react';
import { Link } from 'react-router';

const Lyrics = (props) => {

	const artistChange = e => {
		props.setArtist(e.target.value);
	};

	const songChange = e => {
		props.setSong(e.target.value);
	};

	const text = props.text;
	const setArtists = props.setArtist;
	const artistQuery = props.artistQuery;
	const setSong = props.setSong;
	const songQuery = props.songQuery;
	const handleSubmit = props.handleSubmit;

	return(
		<div id="lyrics">
			<form onSubmit={handleSubmit}>
				<div>
					<input type="text" value={artistQuery} placeholder="Artist" onChange={artistChange}/>
					<input type="text" value={songQuery} placeholder="Song" onChange={songChange}/>
				</div>
				<pre>{text || 'Search above!'}</pre>
				<button type="submit">Search for Lyrics</button>
			</form>
		</div>
	)
}

export default Lyrics;
