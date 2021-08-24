import React, { useState } from "react";
import SidebarOption from "../sidebar/SidebarOption";

import HomeIcon from "@material-ui/icons/Home";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const Sidebar = ({ setDisplay }) => {
  return (
    <div className="sidebar">
      <div className="nav">
        <SidebarOption
          Icon={HomeIcon}
          text="Home"
          setDisplay={setDisplay}
          active={true}
        />

        <SidebarOption
          Icon={NotificationsNoneIcon}
          text="Notifications"
          setDisplay={setDisplay}
        />
        <SidebarOption
          Icon={MailOutlineIcon}
          text="Messages"
          setDisplay={setDisplay}
        />

        <SidebarOption
          Icon={PermIdentityIcon}
          text="Profile"
          setDisplay={setDisplay}
        />
        <SidebarOption
          Icon={PermIdentityIcon}
          text="Logout"
          setDisplay={setDisplay}
        />
      </div>
    </div>
  );
};

export default Sidebar;
