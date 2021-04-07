
import React, { useState } from 'react'
import {View,Text, ScrollView, Image,Dimensions, ImageBackground, TextInput} from 'react-native'
const {width,height}=Dimensions.get('window');
const App = () =>{
    const[search,setSearch]=useState('');

    return(
        <View style={{flex:1}}>
                <View style={{backgroundColor:'#657c15',height:width/3}}>
                    <View style={{flexDirection:'row'}}>
                      <Image style={{height:25,width:40,marginLeft:width/20,marginTop:width/15}} source={require('./images/menu.png')}/>
                      <Text style={{fontSize:30,justifyContent:'center',textAlign:"center",marginTop:width/50,marginLeft:width/5,fontWeight:'bold',color:'white'}}>TSMPB</Text>
                    </View>
                      <Text style={{marginLeft:width/3.2,fontSize:6,alignItems:'center',color:'white'}}>Telangana State Medicinal Plant Board</Text> 

                    <View style={{alignItems:'center',flexDirection:'row',backgroundColor:'white',marginLeft:10,marginRight:10,marginTop:8}}>
                        
                        <Image resizeMode={'contain'} style={{height:15,width:15,marginLeft:10}} source={require('./images/search.png')}/>
                        <TextInput value={search} onChangeText={search => setSearch(search)} style={{width:width/1.5,height:width/9,marginLeft:width/20}} placeholder='search...' ></TextInput>
                        <Image resizeMode={'contain'} style={{height:20,width:80}} source={require('./images/voice.png')}/> 

                    </View>    
                </View>
            
                <View>
                  <Image style={{height:width/2.5,width:width}} source={require('./images/plant.jpeg')}/>
                </View>
           
            <ScrollView style={{backgroundColor:"#f9f5ec"}}>
            <View>
           
                <View>
               
                   <View style={{flexDirection:'row'}}>
                       
                          <Text style={{backgroundColor:'white',borderColor:'gray',borderWidth:1,borderRadius:10,width:width/2.5,height:width/2.5,marginLeft:width/15,marginTop:width/30,textAlign:'center',fontSize:16}}>
                          <Image style={{height:50,width:50}} source={require('./images/seed_indent.png')}/>
                            {'\n\n'}Seed Indent
                          </Text>
                       
                          <Text style={{backgroundColor:'white',borderColor:'gray',borderWidth:1,borderRadius:10,width:width/2.5,height:width/2.5,marginLeft:width/15,marginTop:width/30,textAlign:'center',fontSize:16}}>
                          <Image style={{height:50,width:50}} source={require('./images/alerts.png')}/>
                            {'\n\n'}Alerts
                          </Text>
                       
                   </View>
                
                   <View style={{flexDirection:'row'}}>
                        
                           <Text style={{backgroundColor:'white',borderColor:'gray',borderWidth:1,borderRadius:10,width:width/2.5,height:width/2.5,marginLeft:width/15,marginTop:width/20,textAlign:'center',fontSize:16}}>
                           <Image style={{height:50,width:50}} source={require('./images/apply_subsidy.png')}/>
                            {'\n\n'}Subsidy
                           </Text>
                        
                           <Text style={{backgroundColor:'white',borderColor:'gray',borderWidth:1,borderRadius:10,width:width/2.5,height:width/2.5,marginLeft:width/15,marginTop:width/20,textAlign:'center',fontSize:16}}>
                           <Image style={{height:50,width:50}} source={require('./images/ask_expert.png')}/>
                           {'\n\n'}Ask an expert
                           </Text>
                        
                    </View>
                
                    <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'gray',borderWidth:1,borderRadius:10,width:width/1.15,height:width/2.5,marginLeft:width/15,marginTop:width/20}}>
                         
                         <Image resizeMode={'contain'} style={{height:80,width:80,justifyContent:'center',marginLeft:20,marginTop:30}} source={require('./images/market_info.png')}/>
                         <Image resizeMode={'contain'} style={{height:180,width:180,justifyContent:'center',marginLeft:25,marginTop:''}} source={require('./images/echarak_logo.png')}/>
                         
                    </View>
                    
                </View>
           
            </View>
            </ScrollView>
            
         </View>
    )
}
export default App;
