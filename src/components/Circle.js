/**
 * Created by harry on 23/07/2017.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  select: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
  },
  checked: {
    backgroundColor: '#f23030',
  },
});

export default class Circle extends Component {
  select = () => {
    const {onPress } = this.props;
    let { checked } = this.state;
    checked = !checked;
    this.setState({
      checked,
    });
    onPress && onPress(checked);
  };
  state = {
    checked: false,
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.select, this.state.checked && styles.checked]}
        onPress={this.select}
      />
    );
  }
}