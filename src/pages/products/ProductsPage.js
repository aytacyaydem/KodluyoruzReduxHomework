import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {ProductsItem} from './components';
import {Cart} from './components';
import {useFetch} from "../../hooks/useFetch"
import {styles} from '../../styles/page_styles';
let API_URL = "https://fakestoreapi.com/products"


function ProductsPage(props) {
  const [url,setURL] = useState("https://fakestoreapi.com/products")
  const {data,error,loading,fetchData} = useFetch(url)
  
  useEffect(() => {
    fetchData();
  }, [url]);

  function handleURL (endpoint) {
      setURL(endpoint ?  `${API_URL}/category/${endpoint}` : API_URL)
  }

  const renderProduct = ({item}) =>      <ProductsItem category={item} 
  onSelect={() => props.navigation.navigate('Detalis', {id: item.id})}
  />;

    return (
      <SafeAreaView style={{ flex:1}}>
        <View style={{ flex:1}}>

        <View style={styles.ViewContainer}>
            <View style={styles.categoryContainer}>
                <Cart title={"Men Clothing"} onPress={() => handleURL('men clothing')} />
                <Cart title={"Women Clothing"} onPress={() => handleURL('women clothing')} />
                <Cart title={"Jewelery"} onPress={() => handleURL('jewelery')} />
            </View>

            <View style={[styles.categoryContainer, {marginTop: 10}]}>
            <Cart title={"Electronics"} onPress={() => handleURL('electronics')} />
            <Cart title={"ALL Category"} onPress={() => handleURL("")} />
            </View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          renderItem={renderProduct}
          numColumns={2}
        />
       
       </View>
      </View>
      </SafeAreaView>

      );
    }
    
export {ProductsPage};