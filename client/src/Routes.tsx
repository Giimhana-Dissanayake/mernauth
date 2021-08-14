import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import Activate from "./auth/Activate";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path='/auth/activate/:token' component={Activate}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
