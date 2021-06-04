const initBoard = (width: number, height: number): boardData => {
    const boardArr: boardData = [];
    const tile: tileType = 'water';
    for (let i = 0; i < height; i++) {
        boardArr.push([]);
        for (let j = 0; j < width - 1; j++) {
            const data: tileData = { tile: tile, coord: { x: j, y: i }, shipId: null }
            boardArr[i].push(data);
        }
    }
    return boardArr;
}

const gameBoard = (state: boardData = [[]], action: BoardActions): boardData => {
    const prevBoard = [...state];
    console.log(prevBoard);
    console.log(action);
    switch (action.type) {
        case 'INIT':
            return action.payload ? initBoard(action.payload.w, action.payload.h) : initBoard(10, 10);
        case 'DEL':
            return [[]];
        case 'FIRE':
            prevBoard[action.payload.y][action.payload.x] = { ...state[action.payload.y][action.payload.x], tile: 'miss' }
            return prevBoard;
        default:
            return state;
    }
}

export default gameBoard;