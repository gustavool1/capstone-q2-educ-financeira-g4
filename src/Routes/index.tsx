import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Balance } from "../Pages/Balance";
import { ContentHome } from "../Pages/ContentHome";
import { DashboardKids } from "../Pages/DashboardKids";
import { DashboardParents } from "../Pages/DashboardParents";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { RegisterKids } from "../Pages/RegisterKids";
import { RegisterParents } from "../Pages/RegisterParents";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/balance" component={Balance} />
      <Route path="/registerkids" component={RegisterKids} />
      <Route path="/registerparents" component={RegisterParents} />
      <Route path="/dashboardkids" component={DashboardKids} />
      <Route path="/contenthome" component={ContentHome} />
      <Route path="/dashboardparents" component={DashboardParents} />
    </Switch>
  );
};
