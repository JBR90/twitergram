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
  // const [toggleFeedGrid, setToggleFeedGrid] = useState(false);
  // const [smallScreen, setSmallScreen] = useState(false);

  const handleMediaQueryChangeMobile = (matches) => {
    if (matches === true) {
      setShowNav(false);
      // setIsSmallScreen(true);
    }
  };

  const handleMediaQueryChangeSmallScreen = (matches) => {
    console.log("match");
    if (matches === true) {
      setShowFeed(true);
      setShowGrid(false);
      setShowGridFeedBtn(true);
    }
  };

  const handleMediaQueryChangeLargeScreen = (matches) => {
    console.log("match");
    if (matches === true) {
      setShowFeed(true);
      setShowGrid(true);
      setShowGridFeedBtn(false);
    }
  };

  const handleSwitchFeedGrid = () => {
    // setToggleFeedGrid(!toggleFeedGrid);
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

    // <div className="dashboard">
    //   <TwitterIcon
    //     onClick={(e) => setShowNav(!showNav)}
    //     className="dashboard__twitterIcon"
    //   />
    //   <div className="container">
    //     <div id={showNav ? "showSideBar" : "sidebar"}>
    //       <Sidebar />
    //     </div>
    //     {showGridFeedBtn && (
    //       <div className="container__gridFeedBtn">
    //         <button onClick={(e) => handleSwitchFeedGrid()}>
    //           Twitter/Gram
    //         </button>
    //       </div>
    //     )}

    //     <div
    //       id="feed"
    //       className={`container__item ${!showFeed ? "hide" : "show"}`}
    //     >
    //       {!showNav && <Feed />}
    //     </div>
    //     <div
    //       // id="imageGrid"
    //       className={`container__item  ${!showGrid ? "hide" : null}`}
    //     >
    //       <ImageGrid setSelectedImg={setSelectedImg} />
    //       {selectedImg && (
    //         <Modal
    //           selectedImg={selectedImg}
    //           setSelectedImg={setSelectedImg}
    //           setShowGrid={setShowGrid}
    //           setShowFeed={setShowFeed}
    //         />
    //       )}
    //     </div>
    //   </div>

    // {/* <div className={classes.root}>
    //   <Grid container spacing={3}>
    //     <Grid style={{ maxHeight: "100vh", overflow: "auto" }} item xs>
    //       <Feed />
    //     </Grid> */}
    // {/* <Grid item xs>
    //       <ImageGrid />
    //     </Grid> */}
    // {/* </Grid>
    // </div> */}
    //     {/* <div className="navToggle">
    //       <NavToggle />
    //     </div> */}
    //     {/* <div className="dashboard"> */}
    //     {/* {showNav && <Sidebar />} */}
    //     {/* <Grid style={{ maxHeight: "100vh", overflow: "auto" }}>
    //         <Feed />
    //       </Grid> */}
    //     {/* <Feed /> */}
    //     {/* <ImageGrid /> */}
    //     // {display === "Home" && <Feed />}
    //     {/* </div> */}
    //   // </div>
  );
};

export default Dashboard;
