/**
 * Created by harry on 20/07/2017.
 */
import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import Index from './pages/Index';

const INITIAL_ROUTE = {
  component: Index,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
  },
});

export default class App extends Component {
  renderScene = (route, navigator) => {
    const Comp = route.component;
    return (
      <Comp navigator={navigator} route={route} />
    );
  };
  render() {
    return (
      <View style={styles.root}>
        <Navigator.Navigator
          initialRoute={INITIAL_ROUTE}
          renderScene={this.renderScene} />
      </View>
    );
  }
}