import React from 'react';
import {View, Text, FlatList,Dimensions, SectionList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cart_page_styles} from '../../styles/page_styles';
import CartItem from './components/CartItem';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import LottieView from 'lottie-react-native';
import * as actionTypes from '../../redux/actionTypes';
import Modal from 'react-native-modal';
import delay from "delay"
import { ScrollView } from 'react-native-gesture-handler';

const deviceSize = Dimensions.get("window")

function CartPage(props) {
  const myCart = useSelector((state) => state.cart);
  const [showModal,setShowModal] = React.useState(false)
  const dispatch = useDispatch();
  const [success, setSuccess] = React.useState(false);
  const [history,setHistory] = React.useState(null)
  //{console.log(myCart)}

  function renderItem({item}) {
    return <CartItem data={item} />;
  }

  function cartSummary() {
    if (myCart.length > 0) {
      let total = myCart.reduce((acc, currentItem) => {
        return acc + currentItem.price;
      }, 0);
      return total;
    } else {
      return 0;
    }
  }

  function openModal(){
    setShowModal(true)
  }

  function closeModal(){
    setShowModal(false)
  }

  async function handleSuccess() {
    try {
      let totalPrice = cartSummary();
      console.log("Total Price: ",totalPrice)
      const existingHistory = await AsyncStorage.getItem('buyHistory');
      let newHistory = JSON.parse(existingHistory);
      if (!newHistory) {
        newHistory = [];
      }
      newHistory.push({products:myCart,totalPrice});
      await AsyncStorage.setItem('buyHistory', JSON.stringify(newHistory))
        .then(() => console.log('save is successful'))
        .catch(() => console.log('there was an error on save'));

      dispatch({type: actionTypes.PAYMENT_SUCCESS});
      setSuccess(!success);
    } catch (e) {
      console.log(e);
    }
  }

  async function readStorage(){
    try{
      const jsonValue = await AsyncStorage.getItem("buyHistory");
      let parsed = jsonValue !== null ? JSON.parse(jsonValue) : null
      setHistory(parsed)
    }catch(e) {
      console.log(e)
    }
  }

  async function handleFinishAnimation(){
    await delay(2000);
    setSuccess(!success)
  }

  React.useEffect(() => {
    readStorage()
  },[])

  return (
    <>
    <View style={cart_page_styles.container}>
      {!success && (
        <View style={cart_page_styles.cart}>
          <FlatList
            data={myCart}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            ListHeaderComponent={<CartHeader onModal={openModal} />}
            ListFooterComponent={
              myCart.length > 0 ? (
                <View>
                  <CartFooter
                    totalPrice={cartSummary()}
                    onSuccess={handleSuccess}
                  />
                </View>
              ) : null
            }
            ListEmptyComponent={
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={{color: 'gray', fontSize: 24, alignSelf: 'center'}}>
                  Henüz sepetinizde ürün yok.
                </Text>
              </View>
            }
            contentContainerStyle={{flexGrow: 1}}
          />
        </View>
      )}
      {success && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../../assets/animations/success.json')}
            autoPlay
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            loop={false}
            onAnimationFinish={handleFinishAnimation}
          />
          <Text
            style={{
              fontSize: 27,
              marginTop: 150,
              color: '#7da453',
              fontWeight: 'bold',
            }}>
            Tebrikler! Satın Aldınız.
          </Text>
        </View>
      )}
    </View>
    <Modal isVisible={showModal} onBackdropPress={closeModal} style={{margin:0}} animationIn="bounceInUp" animationInTiming={500}>
        <ScrollView style={{flex:1,backgroundColor:"white",height:deviceSize.height / 1.5,position:"absolute",bottom:0,right:0,left:0}}
        showsVerticalScrollIndicator={false}
        >
          {history?.map((history,index) => {
            return ( 
              <View key={index}>
                <Text style={{marginLeft:10,fontSize:15,marginTop:10}}>{index+1} numaralı kayıt</Text>
                <View style={{borderWidth:1,margin:10,padding:10}}>
                  <View style={{borderBottomWidth:1,borderColor:"gray",paddingBottom:10,marginBottom:10}}>
                {history?.products.map(product => {
                  return (
                    <View key={product.id}>
                    <View style={{borderBottomColor:"gray",}}>
                    <Text style={{fontWeight:"bold",fontSize:16}}>{product.title}</Text>
                    <Text style={{alignSelf:"flex-end"}}>Fiyat: {product.price} TL</Text>
                    </View>
                    </View>
                  )
                })}   
                </View>
                <Text style={{alignSelf:"flex-end",fontWeight:"bold",fontSize:16}}>Toplam Fiyat: {history.totalPrice} TL</Text>
              </View>
              </View>
            )
          })}
        </ScrollView>
    </Modal>
    </>
  );
}
export {CartPage};

/* 
{
"category": "men clothing", 
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
"id": 1, 
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
"price": 109.95, 
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}
*/
