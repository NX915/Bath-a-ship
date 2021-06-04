export const changeMenu = (menu: string): action => {
    return {
        type: menu,
    }
}

export const initBoard = (): action => {
    return {
        type: 'INIT',
    }
}

export const deleteBoard = (): action => {
    return {
        type: 'DEL',
    }
}

export const fire = (coord: coordType): action => {
    console.log('Fire', coord);
    return { type: 'FIRE', payload: coord }
}