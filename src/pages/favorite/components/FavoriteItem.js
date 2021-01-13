import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity,Button} from 'react-native';
import {favorite_item} from './styles';

const FavoriteItem = ({product,onSelect}) => {
  
    return (
        <View style={favorite_item.itemContainer}>
          <View style={favorite_item.itemLogo}>
          <Image
          resizeMode="contain"
          source={{uri: product.image}}
          style={favorite_item.itemImage}
         />
         </View>

        <View style={favorite_item.itemBody}> 
          <Text  numberOfLines ={1} style={favorite_item.itemTitle}>{product.title}</Text>
          <Text style={favorite_item.itemPrice}> price {product.price} $</Text>
          <View style={favorite_item.itemButton}>
          <TouchableOpacity onPress={onSelect}>
            <Text style={favorite_item.itemText}>REMOVE PRODUCT</Text>
            
            
            </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  };
export {FavoriteItem};