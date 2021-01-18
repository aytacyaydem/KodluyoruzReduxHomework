import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');


const product_item = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 5,
        marginVertical: 10,
        borderRadius: 10,
      },
      logo: {
        height: deviceSize.height / 2.5,

      },
      text: {
        fontWeight: 'bold',
        fontSize: 15,
        
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
      CardContainer:{
        flex:1,
        margin:5,
        borderRadius:20,
        borderColor:"#3d6358",
        borderWidth:2,
        justifyContent:"space-between",
      },
      CardView:{
        flex:1,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor: '#eceff1',
    
      },
      CardImage:{
        height:Dimensions.get("window").height / 6,
        width:Dimensions.get("window").width / 3,
        resizeMode:"contain",
        borderRadius:38,
      },
      ViewContainer: {
        backgroundColor: '#f0e5c9',
        flex:1,
        },
        categoryBtn: {
          flex: 1,
          width: '30%',
          marginHorizontal: 0,
          alignSelf: 'center',
        },
        categoryIcon: {
          borderWidth: 0,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          width: 50,
          height: 50,
          backgroundColor: '#3d6358' ,
          borderRadius: 50,
        },
        categoryBtnTxt: {
          alignSelf: 'center',
          marginTop: 5,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
        },
});

export {product_item};