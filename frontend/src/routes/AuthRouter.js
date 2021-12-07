import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cadastro from "screens/Cadastro";
import Login from "screens/Login";

export default function AuthRouter({ match }) {
  return (
    <>
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route
        exact
        path={match.url}
        render={props => (
          <Redirect
            to={{
              pathname: `${match.url}/login`,
              state: { from: props.location },
            }}
          />
        )}
      />
    </>
  );
}
