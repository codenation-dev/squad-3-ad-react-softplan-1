import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";

import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />

        <Route path="/detail:id" component={Detail} />

        <Route path="*" component={<h1>404 Page Not Found</h1>} />
      </Switch>
    </div>
  );
}