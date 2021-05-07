import * as React from 'react';
import GameTile from './GameTile';
import styled from 'styled-components';

const fontSize = '1.5rem';

const RowStyle = styled.ol`
display: flex;
flex-direction: column;
list-style-type: none;
cursor: none;
user-select: none; /* supported by Chrome and Opera */
-webkit-user-select: none; /* Safari */
-khtml-user-select: none; /* Konqueror HTML */
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
`;

const ColStyle = styled.ol`
display: flex;
flex-direction: row;
list-style-type: none;
`;

const CellStyle = styled.li`
font-size: ${fontSize};
&:hover {
    cursor: none;
    filter: brightness(1.8);
}
`;

export default function GameBoard(props: { board: boardData }): JSX.Element {
    const { board } = props;
    const rows = board.map((row, yCoord) => (<li key={yCoord}><ColStyle>{row.map((col, xCoord) => (<CellStyle key={`${yCoord},${xCoord}`}><GameTile tile={col.tile} /></CellStyle>))}</ColStyle></li>))
    return <RowStyle>{rows}</RowStyle>
}