const counterReducer = (state = 0, action: { type: string, payload: number }): number => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}
export default counterReducer;