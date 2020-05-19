import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import ApplicationsList from "../containers/applicationsList";
import ApplicationById from "../containers/applicationById";
import ApplicationsResp from "../containers/applicationsResp";
import ApplicationRespById from "../containers/applicationRespById";

const MyRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/applications" component={ApplicationsList} />
        <Route path="/applications/:_id" component={ApplicationById} />
        <Route exact path="/applicationsResp" component={ApplicationsResp} />
        <Route path="/applicationsResp/:_id" component={ApplicationRespById} />
        <Route exact path="/ApplicationsBis" component={ApplicationsList} />
      </Switch>
    </div>
  );
};

export default MyRoutes;
