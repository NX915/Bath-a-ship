const initBoard = (width: number, height: number): boardData["tiles"] => {
    const boardArr: boardData["tiles"] = [];
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

// positionShips(shipsRequested = this.shipsDefaultCount) {
//     const output = [];
//     let freeSpots;
//     let shipOrientation;
//     for (const shipTypeToPlace in shipsRequested) {
//       for (let i = 0; i < shipsRequested[shipTypeToPlace]; i++) {
//         freeSpots = this.findFreeSpots(this.shipTypes[shipTypeToPlace].size);
//         if (freeSpots.h.length !== 0 || freeSpots.v.length !== 0) {
//           if (freeSpots.h.length === 0) {
//             shipOrientation = 'v';
//           } else if (freeSpots.v.length === 0) {
//             shipOrientation = 'h';
//           } else {
//             shipOrientation = getRandomMaxInt(1);
//             shipOrientation === 0 ? shipOrientation = 'h' : shipOrientation = 'v';
//           }
//           output.push({
//             type: shipTypeToPlace,
//             coord: freeSpots[shipOrientation][getRandomMaxInt(freeSpots[shipOrientation].length - 1)],
//             orient: shipOrientation,
//             hits: [],
//             sunk: false,
//           });
//           this.setShipOccupies(output[output.length - 1]);
//           this.placeShipOnBoard(output[output.length - 1]);
//         }
//       }
//     }
//     // console.log(output.ships[3].occupies);
//     this._ships = output;
//     return output;
//   }

const gameBoard = (state: boardData = { tiles: [[]] }, action: BoardActions): boardData => {
    const prevBoard = { ...state };
    console.log(prevBoard);
    console.log(action);
    switch (action.type) {
        case 'INIT':
            return { tiles: action.payload ? initBoard(action.payload.w, action.payload.h) : initBoard(10, 10) };
        case 'DEL':
            return { tiles: [[]] };
        case 'FIRE':
            prevBoard.tiles[action.payload.y][action.payload.x] = { ...state.tiles[action.payload.y][action.payload.x], tile: 'miss' }
            return prevBoard;
        default:
            return state;
    }
}

export default gameBoard;