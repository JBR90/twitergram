import React, { useState } from "react";
import SignOut from "../auth/Signout";
import Sidebar from "../sidebar/Sidebar";

import UpdateProfile from "../auth/UpdateProfile";
import Home from "../pages/Home";
import Notifications from "../notifications/Notifications";

import { makeStyles } from "@material-ui/core/styles";

import { useAuth } from "../../contexts/AuthContext";

import TwitterIcon from "@material-ui/icons/Twitter";
import { useMediaQuery } from "react-responsive";

const { currentUser, logout } = useAuth;

const Dashboard = () => {
  const [display, setDisplay] = useState("Home");
  const [showNav, setShowNav] = useState(false);
  const [showFeed, setShowFeed] = useState(true);
  const [showGrid, setShowGrid] = useState(true);

  const [selectedImg, setSelectedImg] = useState(null);

  const handleMediaQueryChangeMobile = (matches) => {
    if (matches === true) {
      setShowNav(false);
    }
  };

  const handleMediaQueryChangeSmallScreen = (matches) => {
    if (matches === true) {
      setShowFeed(true);
      setShowGrid(false);
    }
  };

  const handleMediaQueryChangeLargeScreen = (matches) => {
    if (matches === true) {
      setShowFeed(true);
      setShowGrid(true);
    }
  };

  const handleSwitchFeedGrid = () => {
    setShowFeed(!showFeed);
    setShowGrid(!showGrid);
  };

  const isMobile = useMediaQuery(
    { minWidth: 600 },
    undefined,
    handleMediaQueryChangeMobile
  );

  const isSmallScreen = useMediaQuery(
    { maxWidth: 1200 },
    undefined,
    handleMediaQueryChangeSmallScreen
  );

  const islargeScreen = useMediaQuery(
    { minWidth: 1200 },
    undefined,
    handleMediaQueryChangeLargeScreen
  );

  return (
    <div className="dashboard">
      <TwitterIcon
        onClick={(e) => setShowNav(!showNav)}
        className="dashboard__twitterIcon"
      />
      <div className="container">
        <div id={showNav ? "showSideBar" : "sidebar"}>
          <Sidebar setDisplay={setDisplay} />
        </div>

        {display === "Home" && (
          <Home selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}

        {display === "Profile" && <UpdateProfile />}
        {display === "Logout" && <SignOut />}
        {display === "Notifications" && <Notifications />}
      </div>
    </div>
  );
};

export default Dashboard;
