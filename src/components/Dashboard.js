import React, { useState } from "react";
import SignOut from "./Signout";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import ImageGrid from "./ImageGrid";
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
  const [selectedImg, setSelectedImg] = useState(null);

  const handleMediaQueryChange = (matches) => {
    console.log(matches);
    if (matches === true) {
      setShowNav(false);
    }
  };

  const isMobile = useMediaQuery(
    { minWidth: 600 },
    undefined,
    handleMediaQueryChange
  );

  return (
    <div className="dashboard">
      <TwitterIcon
        onClick={(e) => setShowNav(!showNav)}
        className="dashboard__twitterIcon"
      />
      <div className="container">
        {/* <div className="item"></div> */}
        <div id={showNav ? "showSideBar" : "sidebar"}>
          <Sidebar />
        </div>
        {/* {!showNav && */}
        <div id="feed" className="container__item">
          {!showNav && <Feed />}
        </div>
        <div id="imageGrid" className="container__item">
          {/* <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )} */}
        </div>
      </div>

      {/* <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid style={{ maxHeight: "100vh", overflow: "auto" }} item xs>
            <Feed />
          </Grid> */}
      {/* <Grid item xs>
            <ImageGrid />
          </Grid> */}
      {/* </Grid>
      </div> */}
      {/* <div className="navToggle">
        <NavToggle />
      </div> */}
      {/* <div className="dashboard"> */}
      {/* {showNav && <Sidebar />} */}
      {/* <Grid style={{ maxHeight: "100vh", overflow: "auto" }}>
          <Feed />
        </Grid> */}
      {/* <Feed /> */}
      {/* <ImageGrid /> */}
      {/* {display === "Home" && <Feed />} */}
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
