import React from 'react';
import { View, Text, Image} from 'react-native';
import {Details_styles} from './styles';


const ProductDetails = ({detail}) => {
   
    return (
        
      <View style={Details_styles.container}>

        <Image
          resizeMode="contain"
          source={{uri: detail.image}}
          style={Details_styles.logo}
        />
 
        <View style={Details_styles.styles_1}>
          <View style={Details_styles.styles_2}>
            <Text style={Details_styles.text}>{detail.title}</Text>
          </View>
          
        </View>
        <View style={{ alignItems: 'center'}}>
          <Text style={Details_styles.text}>Price {detail.price} $</Text>
          </View>
        <Text  style={Details_styles.text}>{detail.description}</Text>
      </View>
      
    );
  };

export {ProductDetails};

