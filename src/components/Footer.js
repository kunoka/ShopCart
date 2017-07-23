/**
 * Created by harry on 23/07/2017.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
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
    alignItems: 'center',
  },
  selectWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  selectText: {
    marginLeft: 5,
  },
  checkout: {
    backgroundColor: '#f23030',
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
  },
  checkoutText: {
    fontSize: 18,
    color: '#fff',
  }
});
import Circle from '../components/Circle';
export default class Footer extends Component {
  goBack = () => {
    const { navigator } = this.props;
    navigator.pop();
  }
  selectAll = (checked) => {
    alert(checked);
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.selectWrapper}>
          <Circle onPress={this.selectAll}/>
          <Text style={styles.selectText}>全选</Text>
        </View>
        <Text>总计:$</Text>
        <TouchableOpacity
          style={styles.checkout}
          onPress={this.checkout}
        >
          <Text style={styles.checkoutText}>去结算(0)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}