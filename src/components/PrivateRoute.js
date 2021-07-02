import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth, useAuthState } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("This is current user in private", currentUser);
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    ></Route>
  );
}
