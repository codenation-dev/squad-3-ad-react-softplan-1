import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import List from "../components/List";

export default function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        {/* Comentei as duas porque criei tanto rotas para dashboard que seria os logs etc
           e também o profile que é o perfil da parada */}
        {/* <Route path="/dashboard" component={SignUp} />
           <Route path="/profile" component={SignUp} /> */}
        <Route path="/list" component={List} />

        <Route path="*" compoonent={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </div>
  );
}
