import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
import {cart_header_styles} from "../../../styles/component_styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

function CartHeader({onModal}){
    return (
        <View style={cart_header_styles.container}>
            <Text style={cart_header_styles.headerText}>My Cart</Text>
            <TouchableOpacity style={cart_header_styles.iconContainer} onPress={onModal}>
            <Icon name="history" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default CartHeader