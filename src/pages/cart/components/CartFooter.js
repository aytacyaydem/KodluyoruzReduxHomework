import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {cart_footer_styles} from "../../../styles/component_styles"

function CartFooter({totalPrice}){
    return (
        <View style={cart_footer_styles.container}>
            <Text style={cart_footer_styles.priceText}>Toplam: {totalPrice} TL</Text>
            <TouchableOpacity style={cart_footer_styles.buttonContainer}>
                <Text style={cart_footer_styles.buttonText}>Satın Al</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartFooter
