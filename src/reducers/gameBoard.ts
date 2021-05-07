const initBoard = (width: number, height: number): boardData => {
    const boardArr = [];
    const tile: tileType = 'water';
    for (let i = 0; i < height; i++) {
        boardArr.push([{ tile }]);
        for (let j = 0; j < width - 1; j++) {
            boardArr[i].push({ tile });
        }
    }
    return boardArr;
}

const gameBoard = (state = [[]], action: BoardActions): boardData => {
    switch (action.type) {
        case 'INIT':
            return action.payload ? initBoard(action.payload.w, action.payload.h) : initBoard(10, 10);
        case 'DEL':
            return [[]];
        case 'FIRE':
            return state;
        default:
            return state;
    }
}

export default gameBoard;