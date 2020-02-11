import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminRoot from "./components/admin/AdminRoot";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin" component={AdminRoot} />
        <Redirect from="/" to="/admin" />
      </Switch>
    </div >
  );
}
export default App;
