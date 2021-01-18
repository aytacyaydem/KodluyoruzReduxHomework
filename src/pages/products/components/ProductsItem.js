import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {product_item} from './styles';


const ProductsItem = ({category, onSelect}) => {
  
    return (
      
        <TouchableOpacity  style={product_item.CardContainer} onPress={onSelect} >
      <View style={product_item.CardView}>
      <Image
      source={{ uri: category.image }}
      style={product_item.CardImage} />
      
      <View style={{ padding:20}}>
      <Text numberOfLines ={1} style={product_item.text}>{category.title}</Text>
      <Text numberOfLines ={1} style={product_item.text}>{category.price} TL</Text>
      </View>
      </View>
        </TouchableOpacity>
      
    );
  };
export {ProductsItem};
