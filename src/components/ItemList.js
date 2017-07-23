/**
 * Created by harry on 23/07/2017.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import Item from './Item';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
// import cartData from '../logics/CartData';

export default class ItemList extends Component {
  render() {
    const { cartData } = this.props;
    return (
      <ScrollView style={styles.root}>
        {
          cartData.map((data, index) => {
            return <Item key={data.id} index={index} data={data} cartData={cartData} />
          })
        }
      </ScrollView>
    );
  }
}