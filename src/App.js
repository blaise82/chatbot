import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CV from "./components/CV";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";
import Chat from "./components/Chat";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div>
          <Switch>
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
        <Chat />
      </Router>
    );
  }
}
