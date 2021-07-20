import React, { useState } from "react";
// import "../styles/Sidebar.css"

const SidebarOption = ({ text, Icon, active, setDisplay }) => {
  const [optionActive, setOptionActive] = useState(false);

  const handleClick = (e) => {
    active ? setOptionActive(true) : setOptionActive(false);
    console.log(e);
    setDisplay(e);
  };
  return (
    <div className={`sidebarOption ${optionActive && "sidebarOption--active"}`}>
      {/* <Icon /> */}
      <h2 onClick={(e) => handleClick(text)}>{text}</h2>
    </div>
  );
};

export default SidebarOption;
