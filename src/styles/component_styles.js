import React from "react"
import {StyleSheet,Dimensions} from "react-native"

const screenSize = Dimensions.get("window")

const cart_item_styles = StyleSheet.create({
    container : {
      marginTop:20
    },
    imageContainer : {
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    image : {
        height:screenSize.height / 3,
        width:screenSize.width
    },
    title : {
        fontSize:17,
        fontWeight:"bold",
        paddingTop:10
    },
    footer : {
      backgroundColor:"#c8e6c9",
      padding:10  
    },
    alt_footer : {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    price : {
        fontWeight:"bold",
        fontSize:15
    }
})

const cart_header_styles = StyleSheet.create({
    container : {
        padding:10,
        borderBottomColor:"black",
        borderBottomWidth:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    headerText : {
        fontSize:25,
        fontWeight:"bold",
        color:"#338a3e"

    }
})

const cart_footer_styles = StyleSheet.create({
    container : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:30,
        backgroundColor:"#7da453",
    },
    priceText : {
        fontSize:18,
        color:"white",
        fontWeight:"bold"
    },
    buttonContainer : {
        borderColor:"white",
        borderWidth:1,
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:20
    },
    buttonText : {
        fontSize:16,
        fontWeight:"bold",
        color:"white"
    }

})

export {cart_item_styles,cart_header_styles,cart_footer_styles}
