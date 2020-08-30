import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import Marvel from "../components/marvel/Marvel";

const AppRouter = (props) => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={Marvel} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
