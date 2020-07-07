import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/home";
import Sorry from "../components/sorry";
import ApplicationsList from "../containers/applicationsList";
import ApplicationById from "../containers/applicationById";
import ApplicationsResp from "../containers/applicationsResp";
import ApplicationRespById from "../containers/applicationRespById";
import ApplicationsRespManquantes from "../containers/applicationsRespManquantes";
import ApplicationsCyclesManquants from "../containers/applicationsCyclesManquants";
import StatByStatus from "../containers/statByStatus";
import StatByType from "../containers/statByType";
import StatEvolutionAppliValide from "../containers/statEvolutionAppliValide";

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
        <Route
          exact
          path="/respManquantes"
          component={ApplicationsRespManquantes}
        />
        <Route
          exact
          path="/cycleVieManquant"
          component={ApplicationsCyclesManquants}
        />
        {/* menu Statistiques */}
        <Route exact path="/statByStatus" component={StatByStatus} />
        <Route exact path="/statByType" component={StatByType} />
        <Route
          exact
          path="/statEvolutionAppliValide"
          component={StatEvolutionAppliValide}
        />

        {/* menu Administration */}
        <Route exact path="/creationUtilisateur" component={Sorry} />
        <Route exact path="/modifMotDePasse" component={Sorry} />
      </Switch>
    </div>
  );
};

export default MyRoutes;
