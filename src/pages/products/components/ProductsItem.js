import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {product_item} from './styles';

const ProductsItem = ({category, onSelect}) => {
  
    return (
      <View style={product_item.container}>
        <TouchableOpacity onPress={onSelect} >
        <Image
          resizeMode="contain"
          source={{uri: category.image}}
          style={product_item.logo}
        />
        <View style={product_item.styles_1}>
          <View style={product_item.styles_2}>
          <Text  numberOfLines ={1}style={product_item.text}>{category.title}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  };
export {ProductsItem};
