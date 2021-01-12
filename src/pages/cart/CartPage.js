import {View, Text} from 'react-native';
import {useSelector} from "react-redux"

import React from 'react';

function CartPage(props) {
    const myCart = useSelector(state => state.cart)
    return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           { myCart.map(item  => <Text>{item.title}</Text>)}
          </View>
       
      );
    }
export {CartPage};