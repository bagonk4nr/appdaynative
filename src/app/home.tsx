import NavBar from './_incl/navbar';
import * as React from 'react';
import Footer from './_incl/footer';
import { View } from 'react-native';
import Index from './pages/index';
import Heading from './heading/heading';
import {
  withRouter
} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1}} >
        <NavBar />
        <Heading />
        <Index />
        <Footer />
     </View>
    );
  }

}

export default withRouter(Home);
