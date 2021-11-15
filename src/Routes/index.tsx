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
import RoutesChildren from "./routesChildren";
import RoutesParents from "./routesParents";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/balance" component={Balance} isPrivate/>
      <RoutesParents path="/registerkids" component={RegisterKids} isParent/>
      <Route path="/registerparents" component={RegisterParents} />
      <RoutesChildren path="/dashboardkids" component={DashboardKids} isChildren />
      <Route path="/contenthome" component={ContentHome} />
      <RoutesParents path="/dashboardparents" component={DashboardParents} isParent />
    
    </Switch>
  );
};
