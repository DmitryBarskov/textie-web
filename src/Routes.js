import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

const Routes = ({ mapping }) => (
  <Switch>
    {Object.entries(mapping).map(([path, page]) =>
      <Route path={path}>
        {page}
      </Route>
    )}
  </Switch>
);

export default Routes;
