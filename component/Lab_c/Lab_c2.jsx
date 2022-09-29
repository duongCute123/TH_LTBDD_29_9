import React from "react";
import { View, Text, Image, Button,StyleSheet } from "react-native";
const Lab_c2 = () => {
    const dt = require("../../image/dtc.png")
    return (
        <View>
            <View>
                <View>
                    <Image source={dt}></Image>
                </View>
                <View>
                    <Text>
                        Điện Thoại Vsmart Joy 3
                        Hàng chính hãng
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>
                        Chọn một màu bên dưới:
                    </Text>
                </View>
                <View>
                    <Button></Button>
                </View>
                <View>
                    <Button></Button>

                </View>
                <View>
                    <Button></Button>
                </View>
                <View>
                    <Button></Button>
                </View>
            </View>
            <View>
                <Button title="XONG"></Button>
            </View>
        </View>
    )

}
const styles=StyleSheet.crea
export default Lab_c2