import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {CartPage, FavoritePage, ProductsPage, DetalisPage} from './pages';
import MainProvider from "./redux/MainProvider"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsPage} options={{headerShown:false}}/>
      <Stack.Screen name="Detalis" component={DetalisPage} options={{title:"Details"}} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <MainProvider>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="Favorite" component={FavoritePage} />
        <Tab.Screen name="Main" component={MainPages} />
        <Tab.Screen name="Cart" component={CartPage} />
      </Tab.Navigator>
    </NavigationContainer>
    </MainProvider>
  );
}

export default App;
