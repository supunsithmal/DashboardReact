import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import Users from "./components/users";
import Settings from "./components/settings";
import Records from "./components/records";
import SideNav from "./components/sidenav/sidenav";
import store from "./store/store";
import configureStore from "./store/store";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={configureStore()}>
        <div>
          <Header />
          <div className="row container-fluid">
            <SideNav />
            <div className="col-9">
              <HashRouter>
                <Switch>
                  <Route exact path="/" component={Users} />
                  <Route exact path="/records" component={Records} />
                  <Route exact path="/settings" component={Settings} />
                </Switch>
              </HashRouter>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
