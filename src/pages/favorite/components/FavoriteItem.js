import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity,Button} from 'react-native';
import {favorite_item} from './styles';
import Icon from "react-native-vector-icons/AntDesign"


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
          <Text style={favorite_item.itemPrice}> price {product.price} TL</Text>
          <View style={favorite_item.itemButton}>
          <TouchableOpacity onPress={onSelect}>
          <View style={{ flexDirection: 'row' ,borderRadius: 5 }}>
              
                  <Text style={favorite_item.itemText}>REMOVE PRODUCT</Text>
                  
                  <View style={{ paddingHorizontal:5}}>
                   <Icon name="delete" size={20} color="black" />
                  </View>
            </View>
            </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  };
export {FavoriteItem};
