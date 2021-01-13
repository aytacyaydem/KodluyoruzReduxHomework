import React from 'react';
import {View, Text,FlatList} from 'react-native';
import {useSelector} from "react-redux"

import {cart_page_styles} from "../../styles/page_styles"
import CartItem from "./components/CartItem"
import CartHeader from "./components/CartHeader"
import CartFooter from "./components/CartFooter"

function CartPage(props) {
    const myCart = useSelector(state => state.cart)
    {console.log(myCart)}

    function renderItem({item}) {
      return (  
        <CartItem data={item}/>
      )
    }
    
    function cartSummary(){
      if(myCart.length > 0){
        let total = myCart.reduce((acc,currentItem) => {
          return acc + currentItem.price
        },0)
        return total
      }else {
        return 0;
      }
    }
    
    return (
          <View style={cart_page_styles.container}>
            <View style={cart_page_styles.cart}>
              <FlatList data={myCart} renderItem={renderItem} keyExtractor={(_,index) => index.toString()} ListHeaderComponent={<CartHeader />} ListFooterComponent={
                <CartFooter totalPrice={cartSummary()} />
              } />
            </View>
          </View>
       
      );
    }
export {CartPage};

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
