type action = {
    type: string,
    payload?: unknown,
}

export const increment = (number = 1): action => {
    return {
        type: 'INCREMENT',
        payload: number,
    }
}

export const decrement = (number = 1): action => {
    return {
        type: 'DECREMENT',
        payload: number,
    }
}

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