import "./App.css";

import Signup from "./components/auth/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/router/PrivateRoute";
import ForgotPassword from "./components/auth/ForgotPassword";
import UpdateProfile from "./components/auth/UpdateProfile";
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
