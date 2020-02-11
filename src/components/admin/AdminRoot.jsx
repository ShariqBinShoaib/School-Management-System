import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../../stylesheets/AdminRoot.css";

import SideMenu from "../SideMenu";
import NavBar from "../NavBar";
import Home from "./AdminHome";
import AdmissionForm from "../student/AdmissionForm";
import StudentInfo from "../student/StudentInfo";

function AdminRoot() {
  return (
    <div className="main-wrapper">
      <div className="sidemenu">
        <SideMenu />
      </div>
      <div className="main-container">
        <div className="d-navbar">
          <NavBar />
        </div>
        <div className="main-body">
          <Switch>
            <Route
              path="/admin/students/info"
              component={props => <StudentInfo />}
            />
            <Route
              path="/admin/students/admit"
              component={props => <AdmissionForm {...props} />}
            />
            <Route path="/admin/home" component={Home} />
            <Redirect from="/admin" to="/admin/home" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AdminRoot;
