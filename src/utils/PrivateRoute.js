import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, token, ...theRest }) => {
  console.log("props privateRoute: ", token);
  //   const token = "";
  return (
    <Route
      {...theRest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
};

function mapStateToProps(state) {
  return {
    token: state.users.token,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
