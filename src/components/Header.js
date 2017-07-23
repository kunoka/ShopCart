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
    flexDirection: 'row',
    height: 44,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  back: {
    fontSize: 20,
    color: '#900',
  },
  right: {
    fontSize: 30,
    color: 'transparent',
  },
});

export default class Header extends Component {
  goBack = () => {
    const {navigator} = this.props;
    console.log('=====navigator=====');
    console.log(navigator);
    if(navigator) {
      navigator.pop();
    }

  }
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={this.goBack}>
          <Icon name="chevron-left" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.text}>购物车</Text>
        <Icon name="rocket" style={styles.right}  />
      </View>
    );
  }
}