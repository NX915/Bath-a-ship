import * as React from "react";
// import styled from 'styled-components';

// const TileDiv = styled.span`
// display: block;
// `;

const drawTile = (tile: tileType) => {
  switch (tile) {
    case "water":
      return "🟦";
    case "hit":
      return "🔴";
    case "miss":
      return "⚪";
    case "sunk":
      return "⚫";
    case "bb":
      return "💢";
    case "dd":
      return "🔸";
    case "cv":
      return "🈳";
    case "ss":
      return "🔻";
    case "ca":
      return "🆑";
  }
};

export default function GameTile(props: {
  tile: tileType;
  onPress: () => void;
}): JSX.Element {
  return <div onClick={props.onPress}>{drawTile(props.tile)}</div>;
}
