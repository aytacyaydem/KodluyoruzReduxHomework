import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const favorite_item = StyleSheet.create({

      itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
      },
      itemImage: {
        width: 50,
        height: 50,
      },
      itemLogo: {
        padding: 10,
      },
    
      itemText: {
        fontWeight: '500',
        fontSize:14,
        fontWeight: 'bold',
      },

      itemButton: {
        flexDirection: 'row',
      },
    
      itemTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
      },
      itemPrice: {
        fontWeight: 'bold',
        marginVertical: 4,
        fontSize: 17,
      },
    
      itemBody: {
        flex: 1,
        paddingHorizontal: 10,
      },
    
});

export {favorite_item};