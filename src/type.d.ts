type tileType = 'water' | 'hit' | 'miss' | 'sunk' | 'dd' | 'ca' | 'bb' | 'cv' | 'ss';
type tileData = { tile: tileType };
type boardData = tileData[][];

interface ActionInit {
    type: 'INIT',
    payload?: { w: number, h: number },
}

interface ActionDelete {
    type: 'DEL',
}

interface ActionFire {
    type: 'FIRE',
    payload: { l: string, n: number },
}

type BoardActions = ActionInit | ActionFire | ActionDelete;