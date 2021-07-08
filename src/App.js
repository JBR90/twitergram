import "./App.css";
import Sidebar from "./components/Sidebar";
import TweetBox from "./components/TweetBox";
import Feed from "./components/Feed";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Sidebar />
      <Feed /> */}
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* <Signup /> */}
      {/* <Sidebar />
      <Feed /> */}
    </div>
  );
}

export default App;
