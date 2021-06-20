import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { DasboardRoutes } from "./DasboardRoutes";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <DasboardRoutes />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
