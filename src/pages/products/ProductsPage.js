import {SafeAreaView, View, Text, FlatList,Button,TouchableOpacity,ScrollView } from 'react-native';
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {ProductsItem} from './components';


const api_url = 'https://fakestoreapi.com/products';
function ProductsPage(props) {
  const [productList, setproductList] = useState([]);

  

  async function fetchData() {
    const {data} = await axios.get(
      'https://fakestoreapi.com/products',
    );
    setproductList(data);
    //console.log(productList)
    
  }


  async function fetchData1(name) {
    const {data} = await axios.get(
      ` https://fakestoreapi.com/products/category/${name}`,
    );
    setproductList(data);
    //console.log(data)
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderProduct = ({item}) =>      <ProductsItem category={item} 
  onSelect={() => props.navigation.navigate('Detalis', {id: item.id})}
  />;

    return (
      <SafeAreaView style={{ flex:1}}>
      <View style={{ flex:1}}>
      
              <View style={{ flexDirection: 'row' ,justifyContent: 'center'}}>
                <View style={{ width: '60%',height: 20 ,}}>
                    <Button  color="#3d6358"
                     title="electronics" onPress={() => fetchData1('electronics')}/>
                 
                   
                </View>
                <View style={{ width: '60%',height: 30 }}>
                    <Button color="#3d6358"
                        title="jewelery"  onPress={() => fetchData1('jewelery')}/>
                </View>
              </View>
            <View style={{ flexDirection: 'row' ,justifyContent: 'center'}}>
                <View style={{ width: '60%',height: 20 }}>
                      <Button color="#3d6358"
                        title="men clothing" onPress={() => fetchData1('men clothing')}/>
                </View>
                <View style={{ width: '60%',height: 30 }}>
                      <Button color="#3d6358"
                        title="women clothing" onPress={() => fetchData1('women clothing')}/>
                </View>
                  
            </View>
            <View style={{ width: '100%',height: 30 }}>
                      <Button color="#3d6358"
                        title="ALL Category" onPress={() => fetchData()}/>
            </View>
              
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={productList}
          renderItem={renderProduct}
        />
        
       
      </View>
      </SafeAreaView>
  

      );
    }
export {ProductsPage};

