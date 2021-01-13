import {View, Text,FlatList,Button} from 'react-native';
import React, {useState,useEffect} from 'react';
import * as actionTypes from "../../redux/actionTypes"
import {useDispatch,useSelector} from "react-redux"
import {FavoriteItem} from './components';

function FavoritePage(props) {
  const myFavorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();

  const renderFavorites = ({item}) => <FavoriteItem product={item} onSelect={() => dispatch({type:actionTypes.DELETE_FAVORITE,payload:item.id})}/>;
    return (     
          <View style={{ flex:1}}>
                <FlatList
                keyExtractor={(_, i) => i.toString()}
                data={myFavorites}
                renderItem={renderFavorites}
                />
            
          </View>
        
      );
    }
export {FavoritePage};

