import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import lyricsReducer from '../redux/reducers/lyrics-reducer';
import playerReducer from '../redux/reducers/player-reducer';
import thunk from 'redux-thunk';

// const store = createStore(
// 	reducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	combineReducers({
		lyrics: lyricsReducer,
		player: playerReducer
	}),
	composeEnhancers(
		applyMiddleware(thunk, createLogger)
		)
);

export default store;
