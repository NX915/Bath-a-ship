import React from "react";
import "./App.css";
import UserMenu from "./components/UserMenu";
import GameBoard from "./components/GameBoard";
import { useSelector, useDispatch } from "react-redux";
import { changeMenu, initBoard, deleteBoard } from "../actions";

function App(): JSX.Element {
  // const counter = useSelector((state: state) => state.counter);
  const menu = useSelector((state: state) => state.menuState);
  const gameBoard = useSelector((state: state) => state.gameBoard);
  const dispatch = useDispatch();
  const handleMenuChange = (menuIntent: string) => {
    if (
      menuIntent === "PLAY" &&
      gameBoard.length === 1 &&
      gameBoard[0].length === 0
    ) {
      dispatch(initBoard());
    }
    if (menuIntent === "QUIT") {
      dispatch(deleteBoard());
    }
    dispatch(changeMenu(menuIntent));
  };

  return (
    <div className="App">
      <UserMenu menu={menu} handleMenuChange={handleMenuChange} />
      <GameBoard />
    </div>
  );
}

export default App;
