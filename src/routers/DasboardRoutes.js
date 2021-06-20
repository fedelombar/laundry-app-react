import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import DryCleaningScreen from "../components/drycleaning/DryCleaningScreen";
import WashfoldScreen from "../components/washfold/WashfoldScreen";
import TailoringScreen from "../components/tailoring/TailoringScreen";

export const DasboardRoutes = () => {
  return (
    <>
      <div>
        <DashboardScreen />
        <Switch>
          <Route exact path="/wash" component={WashfoldScreen} />
          <Route exact path="/dry" component={DryCleaningScreen} />
          <Route exact path="/tailoring" component={TailoringScreen} />

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
