import React from 'react';
import './App.css';
import UserMenu from './components/UserMenu'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login } from '../actions'

function App() {
  const counter = useSelector((state: { counter: number }) => state.counter);
  const isLogged = useSelector((state: { isLogged: boolean }) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(4))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h2>Logged in!!!</h2> : <button onClick={() => dispatch(login())}>Login</button>}
      <UserMenu menu='start' />
    </div>
  );
}

export default App;