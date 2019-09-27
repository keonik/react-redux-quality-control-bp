import { SHOW_MODAL } from '../actions/Modal'

const initialState = {
    show: false,
    title: '',
    content: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL: {
            return { ...state, ...payload }
        }
        default:
            return state
    }
}
