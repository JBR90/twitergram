import React from "react";
// import "../styles/Sidebar.css"

const SidebarOption = ({ text, Icon, active, setDisplay }) => {
  const handleClick = (e) => {
    console.log(e);
    setDisplay(e);
  };
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {/* <Icon /> */}
      <h2 onClick={(e) => handleClick(text)}>{text}</h2>
    </div>
  );
};

export default SidebarOption;
