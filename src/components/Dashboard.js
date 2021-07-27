import React, { useState } from "react";
import SignOut from "./Signout";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import ImageGrid from "./ImageGrid";
import UpdateProfile from "./UpdateProfile";
import Home from "./Home";
import Notifications from "./Notifications";
import Signout from "./Signout";
import NavToggle from "./NavToggle";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import Modal from "./Modal";
// import "../styles/dashboard.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const { currentUser, logout } = useAuth;

const Dashboard = () => {
  const classes = useStyles();
  const [display, setDisplay] = useState("Home");
  const [showNav, setShowNav] = useState(false);
  const [showFeed, setShowFeed] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [showGridFeedBtn, setShowGridFeedBtn] = useState(false);
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
      setShowGridFeedBtn(true);
    }
  };

  const handleMediaQueryChangeLargeScreen = (matches) => {
    if (matches === true) {
      setShowFeed(true);
      setShowGrid(true);
      setShowGridFeedBtn(false);
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
