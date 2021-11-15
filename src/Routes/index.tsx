import * as React from "react";
import { Switch } from "react-router-dom";
import { Balance } from "../Pages/Balance";
import { ContentHome } from "../Pages/ContentHome";
import { DashboardKids } from "../Pages/DashboardKids";
import { DashboardParents } from "../Pages/DashboardParents";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { RegisterKids } from "../Pages/RegisterKids";
import { RegisterParents } from "../Pages/RegisterParents";
import Route from "./routes";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/balance" component={Balance} isPrivate/>
      <Route path="/registerkids" component={RegisterKids} />
      <Route path="/registerparents" component={RegisterParents} />
      <Route path="/dashboardkids" component={DashboardKids} isPrivate />
      <Route path="/contenthome" component={ContentHome} />
      <Route path="/dashboardparents" component={DashboardParents} isPrivate />
    </Switch>
  );
};
