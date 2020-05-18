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
        {/* logo */}
        <Route exact path="/" component={Home} />

        {/* menu Consultation */}
        <Route exact path="/applications" component={ApplicationsList} />
        <Route path="/applications/:_id" component={ApplicationById} />
        <Route exact path="/ApplicationsBis" component={ApplicationsList} />
        <Route exact path="/applicationsResp" component={ApplicationsResp} />
        <Route path="/applicationsResp/:_id" component={ApplicationRespById} />

        {/* menu Anomalies */}
        <Route exact path="/respManquantes" component={ApplicationsResp} />

        {/* menu Statistiques */}

        {/* menu Administration */}
      </Switch>
    </div>
  );
};

export default MyRoutes;
