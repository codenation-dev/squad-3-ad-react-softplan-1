import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import NotFound404 from "../pages/NotFound404";

export default function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/detail/:id_log" component={Detail} isPrivate />
        <Route path="/404" component={NotFound404} isPrivate/>
        <Route path="*" render={() => <Redirect to="/404" />}></Route>
      </Switch>
    </div>
  );
}
