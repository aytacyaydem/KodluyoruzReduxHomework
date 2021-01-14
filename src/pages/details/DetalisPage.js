import {SafeAreaView, View, Text,Button,ScrollView} from 'react-native';
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {ProductDetails} from './components';
import {useDispatch,useSelector} from "react-redux"
import * as actionTypes from "../../redux/actionTypes"
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetalisPage(props) {

  const {id} = props.route.params;
  const [ProductDetail, setProductDetail] = useState({});
  const dispatch = useDispatch();

  async function fetchFoodData() {
    const {data} = await axios.get(
      ` https://fakestoreapi.com/products/${id}`,
    );
    setProductDetail(data);
    //console.log(data) 

    
  }

  useEffect(() => {
    fetchFoodData();
  }, []);

  const addItem=()=>{
    
    dispatch({type:actionTypes.ADD_FAVORITE,payload:ProductDetail})
    storeData()
  }

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(ProductDetail)
      await AsyncStorage.setItem(String(ProductDetail.id), jsonValue)
    } catch (e) {
      // saving error
    }
  }

    return (
        
      <SafeAreaView>
        <View >
          <ScrollView>
            <ProductDetails detail={ProductDetail} />
                <View style={{ padding:10 }}>
                  <Button color="#3d6358" title="add to my cart" onPress={() => dispatch({type:actionTypes.ADD_CART,payload:ProductDetail})}/>
                  </View>
                <View style={{ padding:10 }}>
                  <Button color="#3d6358" title="add to favorite" onPress={addItem}/>
                </View>
          </ScrollView>
        </View>
    </SafeAreaView>
      );
    }
export {DetalisPage};
