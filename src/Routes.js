import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

const mapping = ({ routes }) => (
  <Switch>
    {Object.entries(routes).map(([path, page]) =>
      <Route path={path}>
        {page}
      </Route>
    )}
  </Switch>
);

export default Routes;
