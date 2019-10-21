import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//components
import App from 'pages/App';
// store
import store from 'store';
import { saveState, wipeState } from 'store/middlewares/LocalStorage';
// styles
import './index.css';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
    // cache or save the redux Store to local storage
    global.cache = () => {
        try {
            saveState(store.getState());
            // eslint-disable-next-line no-console
            console.log('State Saved to local storage');
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };

    // wipe the local storage state
    global.wipe = () => {
        try {
            wipeState();
            // eslint-disable-next-line no-console
            console.log('state removed from local storage');
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };
}
