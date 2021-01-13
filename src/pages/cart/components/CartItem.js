import React from "react"
import {View,Text,Image,TouchableOpacity} from "react-native"
import {cart_item_styles} from "../../../styles/component_styles"
import Icon from "react-native-vector-icons/MaterialIcons"
import {useDispatch} from "react-redux"
import * as actionTypes from "../../../redux/actionTypes"

function CartItem ({data}){
    const dispatch = useDispatch();
    return (
        <View style={cart_item_styles.container}>
            <View style={cart_item_styles.imageContainer}>
                <Image source={{uri:data.image}} style={cart_item_styles.image} resizeMode="contain" />
            </View>
            <View style={cart_item_styles.footer}>
                <Text style={cart_item_styles.title}>{data.title}</Text>
                <View style={cart_item_styles.alt_footer}>
                    <Text style={cart_item_styles.price}>Fiyat : {data.price} TL</Text>
                    <TouchableOpacity onPress={() => dispatch({type:actionTypes.REMOVE_FROM_CART,payload:data.id})}>
                    <Icon name="remove-circle-outline" size={25} color="black" />
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

export default CartItem

/* 
{
"category": "men clothing", 
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
"id": 1, 
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
"price": 109.95, 
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}
*/