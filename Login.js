const { View } = require("react-native")

import React from 'react'
import {Text, View, ImageBackground, Image} from 'react-native'

const Login = () =>{
    return(
        <ImageBackground source={require('./images/bg.jpeg')} style={{flex:1}}>
            <Image source={require('./images/logo.jpeg')}></Image>
            <Text>Login Page</Text>
        </ImageBackground>
    )
    
}

export default Login;