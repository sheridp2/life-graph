import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Dashboard from "./Dashboard";
import EntrysNew from './entrys/EntrysNew'
import Landing from './Landing'

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/entrys/new" component={EntrysNew} />
        </div>
      </BrowserRouter>
    );
  }
}
export default connect(
  null,
  actions
)(App);
