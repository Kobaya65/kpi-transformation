import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import ApplicationsList from "../containers/applicationsList";
import ApplicationById from "../containers/applicationById";
import ApplicationsResp from "../containers/applicationsResp";
import ApplicationRespById from "../containers/applicationRespById";
import ApplicationsRespManquantes from "../containers/applicationsRespManquantes";
import StatParStatut from "../containers/statParStatut";
import StatParType from "../containers/statParType";
import StatEvolutionAppliValide from "../containers/statEvolutionAppliValide";
import Desole from "./desole";

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
        {/* menu Statistiques */}
        <Route exact path="/statParStatut" component={StatParStatut} />
        <Route exact path="/statParType" component={StatParType} />
        <Route
          exact
          path="/statEvolutionAppliValide"
          component={StatEvolutionAppliValide}
        />

        {/* menu Administration */}
        <Route exact path="/creationUtilisateur" component={Desole} />
        <Route exact path="/modifMotDePasse" component={Desole} />
      </Switch>
    </div>
  );
};

export default MyRoutes;
