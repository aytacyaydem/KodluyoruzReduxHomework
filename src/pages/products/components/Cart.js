import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import {product_item} from './styles';


const Cart = ({title,onPress}) => {
  return (
    <TouchableOpacity style={product_item.categoryBtn} onPress={onPress}>
    <View style={product_item.categoryIcon}>
      <Foundation name="shopping-cart" size={35} color="black" />
    </View>
      <Text style={product_item.categoryBtnTxt}>{title}</Text>
  </TouchableOpacity>
  );
};

export {Cart};