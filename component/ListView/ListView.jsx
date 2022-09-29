import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
const noicon = require("../../image/ca_nau_lau.png")
const khoga = require("../../image/ga_bo_toi.png")
const trump = require("../../image/trump1.png")
const cancau = require("../../image/xa_can_cau.png")
const dochoi = require("../../image/do_choi_dang_mo_hinh.png")
const lanhdao = require("../../image/lanh_dao_gian_don.png")
const hieulong = require("../../image/hieu_long_con_tre.png")
const list = [
    {
        noicom: noicon,
        firname: "Cá nấu lẩu,nấu mì mini...",
        shop: "Shop Devan"
    },
    {
        noicom: khoga,
        firname: "Cá nấu lẩu,nấu mì mini...",
        shop: "Shop Devan"
    },
    {
        noicom: trump,
        firname: "Cá nấu lẩu,nấu mì mini...",
        shop: "Shop Devan"
    },
    {
        noicom: cancau,
        firname: "Cá nấu lẩu,nấu mì mini...",
        shop: "Shop Devan"
    },
    {
        noicom: dochoi,
        firname: "Cá nấu lẩu,nấu mì mini...",
        shop: "Shop Devan"
    },
    {
        noicom: lanhdao,
        firname: "Cá nấu lẩu,nấu mì mini...",
        shop: "Shop Devan"
    },
]
const List = ({ lists: { noicom, firname, shop } }) => {
    return (
        <View style={styles.main}>
            <Image source={noicom}></Image>
            <Text>{firname}</Text>
            <Text>{shop}</Text>
            <View>
                <Button title="Chat"></Button>
            </View>
        </View>
    )
}
const Lists = ({ list }) => {
    const listview = list.map((lists) => <List lists={lists} />)
    return listview
}
const ListView = () => {
    return (
        <View style={styles.container}>
            <Lists list={list} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "red"
    },
    main: {
        flex:1,
        flexDirection: "column",

    }
})
export default ListView