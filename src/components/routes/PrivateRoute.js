import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  // console.log(token, "[route]");
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Redirect to="login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
