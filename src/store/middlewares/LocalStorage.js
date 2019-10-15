/* 
  Helper functions used to store state to simplify testing using localStorage
*/
const STATE_KEY = 'state';
const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STATE_KEY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_KEY, serializedState);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('unable to save redux state', error);
    }
};

const wipeState = () => {
    localStorage.removeItem(STATE_KEY);
};

export { loadState, wipeState, saveState };
