import React from 'react';

import {Route, Switch, NavLink, Redirect} from "react-router-dom";
import {Register} from "./Register";
import {Heroes} from "./Heroes";
import {Nav, NavItem} from 'reactstrap';
// import axios from 'axios'

import './Index.scss'

export class Index extends React.Component {
  // constructor(props) {
  //   super(props);
   
  // }
  

  render() {
    return (
      <div>
        <Nav className="mb-3">
          <NavItem>
            <NavLink to="/heroes/hero" className="nav-link">Hero List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route path="/heroes/hero" component={Heroes}></Route>
          <Route path="/heroes/register" component={Register}></Route>
          <Route path="/heroes" render={() => <Redirect to="/heroes/hero" />} />
        </Switch>
        
      </div>
    );
  }
}
