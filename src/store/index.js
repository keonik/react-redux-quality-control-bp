import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { loadState, Sanitizer } from './middlewares';

const persistedState = loadState(); // get localStorage state
const initialState = persistedState || {};

// hide dev tools if not in dev
const composeEnhancers =
    process.env.NODE_ENV !== 'development'
        ? compose()
        : composeWithDevTools({ trace: true, traceLimit: 10, Sanitizer }); // trace dispatch actions up to 10 calls back
export default createStore(rootReducer, initialState, composeEnhancers());
