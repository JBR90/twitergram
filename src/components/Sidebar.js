// import "../styles/sidebar.css"
import React, { useState } from "react";
import SidebarOption from "./SidebarOption";
// import "../styles/Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

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
        {/* <SidebarOption Icon={SearchIcon} text="Explore" /> */}
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
        {/* <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /> */}
        {/* <SidebarOption Icon={ListAltIcon} text="Lists" /> */}
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
        {/* <SidebarOption Icon={MoreHorizIcon} text="More" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
