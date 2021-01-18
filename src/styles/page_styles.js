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
const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop:10,
      marginBottom: 5,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 50,
      height: 50,
      backgroundColor: '#3d6358' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
    },
    ViewContainer: {
      backgroundColor: '#e0e0e0',
      flex:1,
      },
  });
export {cart_page_styles,styles}
