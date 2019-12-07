import React from "react";
import { Switch, Route } from "react-router-dom";

import  Login  from "./Login";
import  List  from "./List";

<<<<<<< HEAD
export default function Routes() {

    return(

        <div className="Routes">
        <Switch>   

           <Route exact path="/" component={Login} />
=======
const Routes = () => {
    <Switch>   
           <Route exact path="/" component={() =><h1>Index</h1>} />
>>>>>>> 2513c9d73350281792386357e9aae839a2bb50a5
           <Route path="/Login" component={Login} />
           <Route path="/List" component={List} />

           <Route path="*" compoonent={() => <h1>404 Page Not Found</h1>} />
<<<<<<< HEAD
        </Switch>
        </div>

    );
}
=======
    </Switch>
}

export default Routes;
>>>>>>> 2513c9d73350281792386357e9aae839a2bb50a5
