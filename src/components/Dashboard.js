import React, { useState } from "react";
import SignOut from "./Signout";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import ImageGrid from "./ImageGrid";
import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import "../styles/dashboard.css";

const { currentUser, logout } = useAuth;

const Dashboard = () => {
  const [display, setDisplay] = useState("Home");
  return (
    <div className="dashboard">
      <Sidebar />
      <Feed />
      <ImageGrid />

      {/* {display === "Home" && <Feed />} */}
    </div>
  );
};

export default Dashboard;
