import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from "react-redux"

function FavoritePage(props) {
  const myFavorites = useSelector(state => state.favorites)
    return (     
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {myFavorites.map(item => <Text>{item.title}</Text>)}
          </View>
        
      );
    }
export {FavoritePage};