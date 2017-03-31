import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reducer from '../redux/reducers/root-reducer';

// const store = createStore(
// 	reducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(createLogger)
  ));

export default store;
