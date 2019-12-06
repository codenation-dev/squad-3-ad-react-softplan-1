import React from "react";
import { Switch, Route } from "react-router-dom";

import  Login  from "./Login";
import  List  from "./List";

const Routes = () => {
    <Switch>   
           <Route exact path="/" component={() =><h1>Index</h1>} />
           <Route path="/Login" component={Login} />
           <Route path="/List" component={List} />

           <Route path="*" compoonent={() => <h1>404 Page Not Found</h1>} />
    </Switch>
}

export default Routes;