import {SafeAreaView, View, Text, FlatList,Button,TouchableOpacity,ScrollView } from 'react-native';
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {ProductsItem} from './components';
import {useFetch} from "../../hooks/useFetch"

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
      
              <View style={{ flexDirection: 'row' ,justifyContent: 'center'}}>
                <View style={{ width: '60%',height: 20 ,}}>
                    <Button  color="#3d6358"
                     title="electronics" onPress={() => handleURL('electronics')}/>
                 
                   
                </View>
                <View style={{ width: '60%',height: 30 }}>
                    <Button color="#3d6358"
                        title="jewelery"  onPress={() => handleURL('jewelery')}/>
                </View>
              </View>
            <View style={{ flexDirection: 'row' ,justifyContent: 'center'}}>
                <View style={{ width: '60%',height: 20 }}>
                      <Button color="#3d6358"
                        title="men clothing" onPress={() => handleURL('men clothing')}/>
                </View>
                <View style={{ width: '60%',height: 30 }}>
                      <Button color="#3d6358"
                        title="women clothing" onPress={() => handleURL('women clothing')}/>
                </View>
                  
            </View>
            <View style={{ width: '100%',height: 30 }}>
                      <Button color="#3d6358"
                        title="ALL Category" onPress={() => handleURL("")}/>
            </View>
              
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          renderItem={renderProduct}
        />
        
       
      </View>
      </SafeAreaView>

      );
    }
export {ProductsPage};

