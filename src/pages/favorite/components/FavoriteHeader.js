import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
import {favorite_item} from './styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

function FavoriteHeader(){
    return (
        <View style={favorite_item.container}>
            <Text style={favorite_item.headerText}> My Favorite</Text>
            <Icon name="heart" size={30} color="black" />  
        </View>
    )
}
export {FavoriteHeader};
