/*
    Why have a state sanitizer?

    Redux developer tools are very useful when you know how to use them. 
    When you need to use a state sanitizer you typically are using redux to 
    store large amounts of data to share between the frontend components. 
    If you don't need to see these large data items (examples: file blobs, components, etc.)
    you can replace them with a state sanitizer like below. This will drastically
    reduce the load put on a developer tool in the browser.
*/
const stateSanitizer = state => {
    if (!state.blob || !state.comp || !state.password) {
        return state
    }
    const temps = { blob: '<<LONG BLOB>>', comp: '<<REACT_COMPONENT>>', password: 'N1C3_TRY' }
    const blob = state.blob.map(b => ({ ...b, content: temps.blob })) // overwrites content in the blobs array to temps.blob value
    const comp = state.comp.map(c => ({ ...c, component: temps.comp })) // overwrites component in the comp array to temps.comp
    const password = { ...state.password, password: temps.password } // overwrites password to temps.password

    return {
        ...state,
        blob,
        comp,
        password,
    }
}

export default stateSanitizer
