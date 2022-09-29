import React from "react";
import { Component } from "react";
import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
const Frame_a = () => {
    return (
        <View style={{width:"100%",height:"100%",backgroundColor:"#C7F4F6",flexDirection:"column",alignItems:"center",justifyContent:'center'}}>
            <View style={{top:0,margin:30}} >
                <Image source={require("../../image/a.png")}></Image>
            </View>
            <View style={{borderColor:"black",justifyContent:"center",alignItems:"center",margin:10}}>
                <Text>GROWS</Text>
                <Text>YOUR PASS</Text>
            </View>
            <View style={{}}>
                <Text>We will help you to grow your business using
                    online server</Text>
            </View>
            <View style={{flexDirection:"row",margin:50,justifyContent:"space-between",alignItems:'center'}}>
                <Button title="LOGIN">LOGIN</Button>
                
                <Button title="SINGUP">SINGUP</Button>
            </View>
            <View style={{}}>
                <Text>HOW WE WORK ?</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({


})
export default Frame_a