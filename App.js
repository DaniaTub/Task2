import React from 'react'
import dash from './screen/dash'
import oldpage from './screen/oldpage'
import product from './screen/product'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
      options={{
        title:'Dashboard'
      }}
         name="Dash"
          component={dash}
           />
        <Stack.Screen
         options={{
          title:'Products'
        }}
         name="Product" 
         component={product}
          />
        <Stack.Screen name="Old" component={oldpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

