import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

const Routes = ({ mapping }) => (
  <Switch>
    {Object.entries(mapping).map(([path, page]) =>
      <Route exact path={path} key={path}>
        {page}
      </Route>
    )}
  </Switch>
);

export default Routes;
