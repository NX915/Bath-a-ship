import * as React from 'react';
import { Button } from '@material-ui/core';

export default function UserMenu(props: { menu: string, handleMenuChange: (menu: string) => void }): JSX.Element {
    const { menu, handleMenuChange } = props;
    return (
        <div>
            {menu === 'START' && <Button variant="contained" color="secondary" onClick={() => handleMenuChange('PLAY')} >Play!</ Button>}
            {menu === 'TOP' && <Button variant="contained" color="primary" onClick={() => handleMenuChange('PAUSE')}>Pause game</Button>}
            {menu === 'PAUSE' && <Button variant="contained" color="primary" onClick={() => handleMenuChange('PLAY')}>Resume</Button>}
            {menu === 'PAUSE' && <Button variant="contained" color="secondary" onClick={() => handleMenuChange('QUIT')}>Quit</Button>}
        </div>
    )
}