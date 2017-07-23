/**
 * Created by harry on 23/07/2017.
 */
import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  back: {
    fontSize: 30,
    color: '#900',
  },
  right: {
    fontSize: 30,
    color: 'transparent',
  },
});

export default class Footer extends Component {
  goBack = () => {
    const {navigator} = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={styles.root}>
      </View>
    );
  }
}