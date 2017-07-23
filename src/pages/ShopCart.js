/**
 * Created by harry on 20/07/2017.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  AppState,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default class ShopCart extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>购物车</Text>
      </View>
    );
  }
}