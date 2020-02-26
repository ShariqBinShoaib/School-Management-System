import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "../react-sidenav/lib";

class SideMenu extends Component {
  state = {
    selectedItem: ""
  };
  componentDidMount() {
    this.setState({ selectedItem: localStorage.getItem("selectedItem") });
    localStorage.removeItem("selectedItem");
    console.log(this.props.match);
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
                localStorage.setItem("selectedItem", selected);
                this.setState({ selectedItem: selected });
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav selected={selectedItem || "dashboard/admin/home"}>
                <NavItem eventKey="dashboard/admin/home">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-home"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="dashboard/admin/users">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-user"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Manage Users</NavText>
                  <NavItem eventKey="dashboard/admin/users/student">
                    <NavText>Students</NavText>
                  </NavItem>
                  <NavItem eventKey="dashboard/admin/users/parent">
                    <NavText>Parents</NavText>
                  </NavItem>
                  <NavItem eventKey="dashboard/admin/users/teacher">
                    <NavText>Teacher</NavText>
                  </NavItem>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
          </React.Fragment>
        )}
      />
    );
  }
}

export default SideMenu;
