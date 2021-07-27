import React, { useState } from "react";

const SidebarOption = ({ text, Icon, active, setDisplay }) => {
  const [optionActive, setOptionActive] = useState(false);

  const handleClick = (e) => {
    active ? setOptionActive(true) : setOptionActive(false);

    setDisplay(e);
  };
  return (
    <div className={`sidebarOption ${optionActive && "sidebarOption--active"}`}>
      <h2 onClick={(e) => handleClick(text)}>{text}</h2>
    </div>
  );
};

export default SidebarOption;
