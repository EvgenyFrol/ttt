const createStore = (rootReducer, initialState) => {
    let state = rootReducer(initialState, { type: 'INIT' })
    const subscribers = []

    return {
        dispatch(action) {
            state = rootReducer(state, action)
            return subscribers.forEach(sub => sub)
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state;
        }
    }
}

export default createStore;