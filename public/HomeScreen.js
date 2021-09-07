import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {



    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Plus</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCount(count - 1)}>
                    <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18 }}>Minus</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>Value is  {count}</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Details", { key: count })}>
                    <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18 }}>Press value on details</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}


export default HomeScreen;