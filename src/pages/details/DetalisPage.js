import {SafeAreaView, View, Text,Button,ScrollView} from 'react-native';
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {ProductDetails} from './components';
import {useDispatch,useSelector} from "react-redux"
import * as actionTypes from "../../redux/actionTypes"


function DetalisPage(props) {

  const {id} = props.route.params;
  const [ProductDetail, setProductDetail] = useState({});
  const dispatch = useDispatch();

  async function fetchFoodData() {
    const {data} = await axios.get(
      ` https://fakestoreapi.com/products/${id}`,
    );
    setProductDetail(data);
    console.log(data) 

    
  }
  useEffect(() => {
    fetchFoodData();
  }, []);

    return (
        
      <SafeAreaView>
        <View >
          <ScrollView>
            <ProductDetails detail={ProductDetail} />
                <View style={{ padding:10 }}>
                  <Button color="#3d6358" title="add to my cart" onPress={() => dispatch({type:actionTypes.ADD_CART,payload:ProductDetail})}/>
                  </View>
                <View style={{ padding:10 }}>
                  <Button color="#3d6358" title="add to favorite" onPress={() => dispatch({type:actionTypes.ADD_FAVORITE,payload:ProductDetail})}/>
                </View>
          </ScrollView>
        </View>
    </SafeAreaView>
      );
    }
export {DetalisPage};

