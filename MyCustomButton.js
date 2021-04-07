import React, { Component } from "react";  
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native"; 



placeSubmitHandler = () => {  
    alert("button clicked")  
}; 
const MyCustomButton = ({buttonName}) => {

    return (
        <TouchableOpacity style={{backgroundColor:'yellow',height:30,width:100,justifyContent:'center',borderRadius:20,marginTop:20}} onPress ={()=> placeSubmitHandler()}>
            <Text style={{marginLeft:20}}>{buttonName}</Text>
        </TouchableOpacity>
        
    )
}
export default MyCustomButton
