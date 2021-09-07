import React, { useState, useEffect } from 'react'
import {View,Text, ScrollView, Image,Dimensions, ImageBackground, TextInput, TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get('window');

const Details = (props) =>{

    
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:18}}>Details Screen </Text>
            <Text style={{fontSize:15, fontWeight:'bold', padding:5}}>Value coming from homescreen : {props.route.params.key} </Text>
        </View>
    )
}
export default Details