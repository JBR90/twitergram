import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Sidebar.css";

const NavToggle = () => {
  return (
    <div className="navToggle">
      <TwitterIcon className="navToggle__twitterIcon" />
    </div>
  );
};

export default NavToggle;
