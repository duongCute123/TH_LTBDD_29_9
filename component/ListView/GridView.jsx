import React from "react";
import { Component } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Rating } from "react-native-rating-element";
const ps21 = require("../../image/daucam1.png")
const ps22 = require("../../image/carbusbtops21.png")
const ps23 = require("../../image/dauchuyendoi1.png")
const ps24 = require("../../image/dauchuyendoipsps21.png")
const ps25 = require("../../image/daynguon1.png")
const ps26 = require("../../image/giacchuyen1.png")
const list = [
    {
        cap: ps21,
        firstname: "Cáp chuyển từ Cổng USB sang PS2...",
        gia: "69.900 đ",
        sale: "-39%"
    },
    {
        cap: ps22,
        firstname: "Cáp chuyển từ Cổng USB sang PS2...",
        gia: "69.900 đ",
        sale: "-39%"
    },
    {
        cap: ps23,
        firstname: "Cáp chuyển từ Cổng USB sang PS2...",
        gia: "69.900 đ",
        sale: "-39%"
    },
    {
        cap: ps24,
        firstname: "Cáp chuyển từ Cổng USB sang PS2...",
        gia: "69.900 đ",
        sale: "-39%"
    },
    {
        cap: ps25,
        firstname: "Cáp chuyển từ Cổng USB sang PS2...",
        gia: "69.900 đ",
        sale: "-39%"
    },
    {
        cap: ps26,
        firstname: "Cáp chuyển từ Cổng USB sang PS2...",
        gia: "69.900 đ",
        sale: "-39%"
    }
]
const List = ({ lists: { cap, firstname, gia, sale } }) => {
    return (
        <View style={{ backgroundColor: "gray", }}>
            <Image source={cap}></Image>
            <Text>{firstname}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Rating
                    rated={3.7}
                    totalCount={5}
                    ratingColor="#f1c644"
                    ratingBackgroundColor="#d4d4d4"
                    size={24}
                    readonly // by default is false
                    icon="ios-star"
                    direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                />
                <Text>(15)</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text>{gia}</Text>
                <Text>{sale}</Text>
            </View>
        </View>
    )
}
const Lists = ({ list }) => {
    const listview = list.map((lists) => <List lists={lists} />)
    return listview
}
const GridViews = ({ cap, firstname, gia, sale }) => {
    return (
        <View style={{ backgroundColor: "gray",flex:1}}>
            <View style={{padding:21}}>
                <Image source={cap}></Image>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ width: 90 }}>{firstname}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",margin:5}}>
                <Rating
                    rated={3.7}
                    totalCount={5}
                    ratingColor="#f1c644"
                    ratingBackgroundColor="#d4d4d4"
                    size={24}
                    readonly // by default is false
                    icon="ios-star"
                    direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                />
                <Text>(15)</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",margin:5,padding:4 }}>
                <Text>{gia}</Text>
                <Text style={{}}>{sale}</Text>
            </View>
        </View>
    )
}
const GridView = () => {
    return (
        <View style={{flex:1,width:"100%",height:"100%"}}>
            <FlatList
                data={list}
                renderItem={({ item }) => <GridViews cap={item.cap} firstname={item.firstname} gia={item.gia} sale={item.sale} />}
                numColumns={2}
            />
        </View>
    )
}
export default GridView