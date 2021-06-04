const menuReducer = (state = { menu: 'START' }, action: { type: string }): menuState => {
    switch (action.type) {
        case 'PAUSE':
            return { menu: 'PAUSE' };
        case 'PLAY':
            return { menu: 'TOP' };
        case 'QUIT':
            return { menu: 'START' };
        default:
            return { ...state };
    }
}

export default menuReducer;