import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
const Lab_c1 = () => {
    return (
        <View>
            <View>
                <Image source={require("../../image/vsmart_live_xanh 1.png")}></Image>
            </View>
            <View>
                <Text>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
            </View>
            <View>
                <View>
                    <Image source={require("../../image/Star 1.png")}></Image>
                    <Image source={require("../../image/Star 1.png")}></Image>
                    <Image source={require("../../image/Star 1.png")}></Image>
                    <Image source={require("../../image/Star 1.png")}></Image>
                    <Image source={require("../../image/Star 1.png")}></Image>
                </View>
                <View>
                    <Text>
                        (Xem 828 đánh giá)
                    </Text>
                </View>
                <View>
                    <Text>1.790.000 đ</Text>
                    <Text>1.790.000 đ</Text>
                </View>
                <View>
                    <Text>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image source={require('../../image/Vector.png')}/>
                </View>
                <View>
                    <Button title="4 MÀU-CHỌN MÀU">
                        <Image source={require("../../image/a.png")}></Image>
                    </Button>
                </View>
            </View>
            <View>
                <Button title="CHỌN MUA"></Button>
            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    header:{
        flex:3,
    },
    header1:{
        flexDirection:"row",
    },
    header2:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    header3:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red"
    }


})
export default Lab_c1