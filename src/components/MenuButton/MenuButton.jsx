import { useInitStore } from "../../Hooks/useInitStore";
import { globalStore } from "../../Stores/globalStore";
import "./MenuButton.css";

import React, { useState } from "react";
const MenuButton = () => {
  const [globalState, setGlobalState] = useState(globalStore.currentState());
  useInitStore(globalStore, setGlobalState);
  return (
    <div
      className={`menu-button-container${
        globalState.isActive ? " active" : ""
      }`}
      onClick={() => {
        if (globalStore.currentState().isActive === false)
          globalStore.updateData({
            isActive: true,
            page: 0,
          });
        else
          globalStore.updateData({
            isActive: false,
            page: globalStore.currentState().prevPage,
          });
      }}
    >
      <span className="one"></span>
      <span className="two"></span>
      <span className="three"></span>
    </div>
  );
};

export default MenuButton;
