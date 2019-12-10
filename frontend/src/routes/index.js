import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import List from "../pages/List";

import { Dashboard } from "@material-ui/icons";

export default function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/list" component={List} isPrivate/>

        <Route path="*" compoonent={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </div>
  );
}
