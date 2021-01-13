import React from "react"
import {StyleSheet,Dimensions} from "react-native"

const screenSize = Dimensions.get("window")

const cart_page_styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    cart : {
        flex:1
    }
})

export {cart_page_styles}

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