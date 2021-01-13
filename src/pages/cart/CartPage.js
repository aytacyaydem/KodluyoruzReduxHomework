import {View, Text,FlatList} from 'react-native';
import {useSelector} from "react-redux"

import React from 'react';

function CartPage(props) {
    const myCart = useSelector(state => state.cart)

    const renderCart = ({item}) => <Text>{item.title}</Text>;
    return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                keyExtractor={(_, i) => i.toString()}
                data={myCart}
                renderItem={renderCart}
                />
          </View>
       
      );
    }
export {CartPage};
