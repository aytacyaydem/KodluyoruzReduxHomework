import {View, Text,FlatList,Button} from 'react-native';
import React, {useState,useEffect} from 'react';
import * as actionTypes from "../../redux/actionTypes"
import {useDispatch,useSelector} from "react-redux"
import {FavoriteItem} from './components';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FavoritePage(props) {
  const myFavorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();

  const getData = async () => {
    var i;
    for (i = 1; i < 21; i++) {
    try {
      let jsonValue = await AsyncStorage.getItem(String(i))
      if (jsonValue != null){
      let parsed = JSON.parse(jsonValue);
      console.log('jsonValue') 
      console.log(parsed)  
      dispatch({type:actionTypes.ADD_FAVORITE,payload:parsed}) }
    } catch(e) {
      // error reading value
    }
  }
  }

  useEffect(() => {
    getData();
  },);


  const renderFavorites = ({item}) => <FavoriteItem product={item} onSelect={() =>  {dispatch({type:actionTypes.DELETE_FAVORITE,payload:item.id}), AsyncStorage.removeItem(String(item.id));}}/>;
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

