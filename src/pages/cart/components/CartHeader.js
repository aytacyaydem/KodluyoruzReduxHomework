import React from "react";
import {View,Text} from "react-native"
import {cart_header_styles} from "../../../styles/component_styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

function CartHeader(){
    return (
        <View style={cart_header_styles.container}>
            <Text style={cart_header_styles.headerText}>My Cart</Text>
            <Icon name="cart" size={30} color="black" />
            
        </View>
    )
}

export default CartHeader