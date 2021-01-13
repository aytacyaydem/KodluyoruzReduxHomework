import React from 'react';
import {View, Text,FlatList} from 'react-native';
import {useSelector} from "react-redux"

import {cart_page_styles} from "../../styles/page_styles"
import CartItem from "./components/CartItem"
import CartHeader from "./components/CartHeader"
import CartFooter from "./components/CartFooter"
import LottieView from 'lottie-react-native';

function CartPage(props) {
    const myCart = useSelector(state => state.cart)
    const [success,setSuccess] = React.useState(false)
    {console.log(myCart)}

    function renderItem({item}) {
      return (  
        <CartItem data={item}/>
      )
    }
    
    function cartSummary(){
      if(myCart.length > 0){
        let total = myCart.reduce((acc,currentItem) => {
          return acc + currentItem.price
        },0)
        return total
      }else {
        return 0;
      }
    }

    function handleSuccess(){
      setSuccess(!success)
    }
    
    return (
          <View style={cart_page_styles.container}>
            {!success && <View style={cart_page_styles.cart}>
              <FlatList data={myCart} renderItem={renderItem} keyExtractor={(_,index) => index.toString()} ListHeaderComponent={<CartHeader />} 
              ListFooterComponent={
                myCart.length > 0 ? (
                  <View>
                    <CartFooter totalPrice={cartSummary()} onSuccess={handleSuccess}/>
                  </View>
                ) : (null)
              }
              />
            </View>}
            {success && (
              <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <LottieView source={require("../../assets/animations/success.json")} autoPlay style={{flex:1,justifyContent:"center",alignItems:"center"}} loop={false} onAnimationFinish={handleSuccess}
            />
              <Text style={{fontSize:27,marginTop:150,color:"#7da453",fontWeight:"bold"}}>Tebrikler! Satın Aldınız.</Text>
            </View>
            )
            
            }
          </View>
       
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
