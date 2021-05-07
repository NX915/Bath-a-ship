const menuReducer = (state = 'START', action: { type: string }): string => {
    switch (action.type) {
        case 'PAUSE':
            return 'PAUSE';
        case 'PLAY':
            return 'TOP';
        case 'QUIT':
        default:
            return 'START';
    }
}

export default menuReducer;