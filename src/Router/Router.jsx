import Dashboard from "../pages/Dashboard/Dashboard";
import Registeration from "../pages/signup/Registeration";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import React from "react";
import AuthRoute from "./AuthRouter";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AuthRoute exact path="/" component={Login} />
          <AuthRoute path="/Signup" component={Registeration} />
          <ProtectedRoute path="/Dashboard" component={Dashboard}></ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
