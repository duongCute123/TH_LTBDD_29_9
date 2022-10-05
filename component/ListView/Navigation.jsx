import React from "react";
import { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import ListView from "./ListView";
import GridView from "./GridView";
const Home = () => {
  return (
    <View>
      <Text>Hello anh dương nhá</Text>
    </View>
  )
}
const Stack = createNativeStackNavigator()
const TestNavigation = () => {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={GridView} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
export default TestNavigation