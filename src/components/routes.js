import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import ApplicationsList from "../containers/applicationsList";
import ApplicationById from "../containers/applicationById";
import ApplicationsResp from "../containers/applicationsResp";
import ApplicationRespById from "../containers/applicationRespById";
import Statistiques from "../components/statistiques";

const MyRoutes = () => {
  return (
    <div>
      <Switch>
        {/* logo SG */}
        <Route exact path="/" component={Home} />
        {/* menu Consultation */}
        <Route exact path="/applications" component={ApplicationsList} />
        <Route exact path="/applicationsResp" component={ApplicationsResp} />
        <Route
          exact
          path="/applicationsParFiltre"
          component={ApplicationsList}
        />

        <Route path="/applications/:_id" component={ApplicationById} />
        <Route path="/applicationsResp/:_id" component={ApplicationRespById} />
        {/* menu Anomalies */}
        <Route exact path="/respManquantes" component={ApplicationsResp} />
        {/* menu Statistiques */}
        <Route exact path="/statistiques" component={Statistiques} />
        {/* menu Administration */}
        <Route exact path="/creationUtilisateur" component={Statistiques} />
        <Route exact path="/modifMotDePasse" component={Statistiques} />
      </Switch>
    </div>
  );
};

export default MyRoutes;
