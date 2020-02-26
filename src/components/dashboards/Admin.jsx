import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../../stylesheets/AdminRoot.css";

import SideMenu from "../SideMenu";
import NavBar from "../NavBar";
import Home from "../admin/AdminHome";
import AdmissionForm from "../student/AdmissionForm";
import StudentInfo from "../student/StudentInfo";
import ParentInfo from "../parent/ParentInfo";
import TeacherInfo from "../teacher/TeacherInfo";
import AddParent from "../parent/AddParent";

function Admin() {
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
              path="/dashboard/admin/users/student/info"
              component={props => <StudentInfo />}
            />
            <Route
              path="/dashboard/admin/users/parent/admit"
              component={props => <AddParent {...props} />}
            />
            <Route
              path="/dashboard/admin/users/student/admit"
              component={props => <AdmissionForm {...props} />}
            />
            <Route
              path="/dashboard/admin/users/teacher"
              component={props => <TeacherInfo {...props} />}
            />
            <Route
              path="/dashboard/admin/users/parent"
              component={props => <ParentInfo {...props} />}
            />
            <Route
              path="/dashboard/admin/users/student"
              component={props => <StudentInfo {...props} />}
            />
            <Route path="/dashboard/admin/home" component={Home} />
            <Redirect from="/dashboard/admin" to="/dashboard/admin/home" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Admin;
