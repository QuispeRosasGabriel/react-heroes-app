import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import MarvelScreen from "../components/marvel/Marvel";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/heroes/HeroScreen";

const DashboardRoutes = (props) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <Switch>
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/hero/:heroeId" component={HeroScreen} />
            <Route exact path="/dc" component={DcScreen} />
            <Redirect to="/marvel" />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default DashboardRoutes;
