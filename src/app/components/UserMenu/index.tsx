import * as React from "react";
import { Button } from "@material-ui/core";

export default function UserMenu(props: {
  menu: menuState;
  handleMenuChange: (menu: string) => void;
}): JSX.Element {
  const { menu, handleMenuChange } = props;
  const { menu: menuState } = menu;
  return (
    <div>
      {menuState === "START" && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleMenuChange("PLAY")}
        >
          Play!
        </Button>
      )}
      {menuState === "TOP" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleMenuChange("PAUSE")}
        >
          Pause game
        </Button>
      )}
      {menuState === "PAUSE" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleMenuChange("PLAY")}
        >
          Resume
        </Button>
      )}
      {menuState === "PAUSE" && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleMenuChange("QUIT")}
        >
          Quit
        </Button>
      )}
    </div>
  );
}
