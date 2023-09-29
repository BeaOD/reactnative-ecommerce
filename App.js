import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen'
import AddToCartScreen from './src/screens/AddToCartScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator  initialRouteName='OnlineShopping'
       >


      <Stack.Screen name='OnlineShopping' 
      component={OnlineShoppingScreen} /> 
 
      <Stack.Screen name='AddToCart' 
      component={AddToCartScreen} />

     

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}


