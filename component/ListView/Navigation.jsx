import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListView from './ListView';
import GridView from './GridView';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ListView}
        />
        <Stack.Screen name="Profile" component={GridView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack