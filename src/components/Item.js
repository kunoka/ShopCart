/**
 * Created by harry on 23/07/2017.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Circel from './Circle';
import {observer} from 'mobx-react/native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 120,
  },
  img: {
    width: 90,
    height: 90,
  },
  content: {

  },
  price: {

  },
  name:{
    width: 180,
    fontSize: 16,
  },
  priceAndControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
  },
  buttonText: {
  },
});
@observer
export default class Item extends Component {
  check = (checked) => {
    const {index, cartData} = this.props;
    cartData.check(checked, index);
  };
  minus = () => {
    const { index, data: {count}, cartData } = this.props;
    if (count > 1) {
      cartData.minus(index);
    }
  };
  plus = () => {
    const { index, cartData } = this.props;
      cartData.plus(index);
  };
  render() {
    const { index, data: { id, name, price, count, img, checked }} = this.props;
    return (
      <View style={styles.root}>
        <Circel onPress={this.check}/>
        <Image style={styles.img} source={{uri: img}} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.priceAndControls}>
            <Text style={styles.price}>¥{price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.minus}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.plus}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}