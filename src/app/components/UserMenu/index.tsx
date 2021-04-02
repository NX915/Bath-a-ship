import * as React from 'react';
import { Button } from '@material-ui/core';

export default function UserMenu(props: { menu: string }) {
    let menu;
    switch (props.menu) {
        case 'pause':
            menu = <Button variant="contained" color="primary">Pause</Button>;
            break;
        case 'popup':
            menu = <Button variant="contained" color="primary">popup</Button>;
            break;
        case 'start':
        default:
            menu = <Button variant="contained" color="secondary">Play!</Button>;
            break;
    }
    return (menu);
}