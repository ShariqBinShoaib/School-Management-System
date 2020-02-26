import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Admin from "./components/dashboards/Admin";
import Teacher from "./components/dashboards/Teacher";
import Parent from "./components/dashboards/Parent";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard/admin/" component={Admin} />
        <Route path="/dashboard/teacher/" component={Teacher} />
        <Route path="/dashboard/parent/" component={Parent} />
        <Route path="/dashboard/" component={Login} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
}
export default App;
