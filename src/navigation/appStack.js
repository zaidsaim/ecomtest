import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Entypo from 'react-native-vector-icons/Entypo'
import  AntDesign  from "react-native-vector-icons/AntDesign";
import CartScreen from "../screens/CartScreen";

const AppStack = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
 
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarLabelStyle: { color: "#cc1306" },
        headerShown: false,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="home" size={24} color="#cc1306" />
          ) : (
            <AntDesign name="home" size={24} color="black" />
          ),
      }}
    />
    <Tab.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        tabBarLabel: "Cart",
        tabBarLabelStyle: { color: "#cc1306" },
        headerShown: false,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <AntDesign name="shoppingcart" size={24} color="#cc1306" />
          ) : (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
      }}
    />
  </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
