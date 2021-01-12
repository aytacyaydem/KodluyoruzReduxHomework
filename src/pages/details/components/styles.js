import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const Details_styles = StyleSheet.create({
    container: {
    
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#bdbdbd',
      margin: 5,
      marginVertical: 10,
      borderRadius: 10,
      
      
    },
    logo: {
      height: deviceSize.height / 3,
      borderRadius:30,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      alignItems: 'center',
      
    },
    styles_1: {
      padding: 5,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: '#e0e0e0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
    },
    styles_2: {},
    buttonContainer: {
      backgroundColor: '#039be5',
      padding: 10,
      borderRadius: 10,
      
    },
  });

  export {Details_styles};