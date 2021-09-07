import "react-native-gesture-handler";
import React, { Component, useState, Children, useEffect } from 'react'
import { View, Text, ScrollView, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity, Settings } from 'react-native'
import HomeScreen from "./public/HomeScreen";
const { width, height } = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from "./public/Details";



const App = () => {



  const Stack = createStackNavigator()




  return (



    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />

      </Stack.Navigator >
    </NavigationContainer>


  )
}
export default App;
