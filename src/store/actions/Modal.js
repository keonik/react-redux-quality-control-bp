// why do this? Removes potential misspelling and duplicate declaration of types
export const SHOW_MODAL = 'SHOW_MODAL';

// why do this? Makes dispatching a store actions easy and look like a function inside a component
export const showModal = (show, title, content) => ({
    type: SHOW_MODAL,
    payload: { show, title, content },
});
