import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "../react-sidenav";

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
              <SideNav.Nav selected={selectedItem || "admin/home"}>
                <NavItem eventKey="admin/home">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-home"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="admin/students">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-user"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Manage Students</NavText>
                  <NavItem eventKey="admin/students/admit">
                    <NavText>Admit Student</NavText>
                  </NavItem>
                  <NavItem eventKey="admin/students/info">
                    <NavText>Students Information</NavText>
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
