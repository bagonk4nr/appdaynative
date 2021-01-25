/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useParams
} from "react-router-dom";
import Home from './home';
import emptyCache from './_config/EmptyCache';
// import User from './pages/user';

class Routenya extends React.Component<any> {

    componentDidMount() {
      this.todo(JSON.stringify(this.props.location) + " location");
      // if (this.props.location.state != undefined) {
      //     this.todo(this.props.location.state.routes + " params");
      // }

    }

    render() {

      if (this.props.location.state != undefined) {
          // const nav = this.props.location.state.routes;
          const modl = this.props.location.state.data;
          // const Nav1 = nav.replace("'", "");
          const mod = modl.replace("'", "");

          const { AutoIndex } = require('./pages/' + mod);

          // this.todo('./pages/' + mod);
          // this.todo(AutoIndex);
          // this.todo(mod);


          return <AutoIndex />;

      } else {
        return <Home />;
      }

    }

    todo = function(msg) {
        console.log(' %c %s %s %s', 'color: yellow; background-color: black;', '–', JSON.stringify(msg), '–');
    }
}

emptyCache;

const App = () => (

  <Router>
      <Switch>
        <Route  component={Routenya} />
      </Switch>
  </Router>

);

// const todo = function(msg) {
//     console.log(' %c %s %s %s', 'color: yellow; background-color: black;', '–', JSON.stringify(msg), '–');
// }

export default App;
