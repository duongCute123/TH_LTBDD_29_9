import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,r } from 'react-native';
import Lab_c1 from './component/Lab_c/Lab_c';
import Flex from './component/Lab_c/Test';
import Frame_a from './component/Lab_c/Test';
import ListView from './component/ListView/ListView';
import GridView from './component/ListView/GridView';
import Navigation from './component/ListView/Navigation';
import MyStack from './component/ListView/Navigation';
const Frame_C = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, }}>
        <View>
          <Image source={require("./image/book.png")}></Image>
        </View>
        <View>
          <View>
            <Text>Nguyên hàm tích phân và ứng dụng</Text>
            <Text>Cung cấp bởi công ty Trading</Text>
            <Text>141.800 đ</Text>
            <Text>141.800 đ</Text>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", borderRadius: 10 }}>
            <Button title='-'></Button>
            <Text>1</Text>
            <Button title='+'></Button>
            <Text>Mua sau</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text>Mã giảm giá đã lưu</Text>
          <Text>Xem tại đây</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Button title='Mã Giảm Giá'></Button>
          <Image source={require('./image/yellow_block.svg')}></Image>
          <Button title='Áp dụng'></Button>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "gray", padding: 3 }}>
        <View style={{ width: "100%", height: 50, flexDirection: "row", backgroundColor: "white", padding: 3, alignItems: "center", justifyContent: "space-between" }}>
          <Text>Bạn có phiếu quà tặng Tiki/Gotit/Urbox</Text>
          <Text>Nhập tại đây</Text>
        </View>
        <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row", borderColor: "gray", alignItems: "center", padding: 3, justifyContent: "space-between", marginTop: 20, padding: 3 }}>
          <Text>Tạm tính</Text>
          <Text>141.800 đ</Text>
        </View>
        <View style={{ marginTop: "3,padding:30%", backgroundColor: "white", width: "100%", height: "200px" }}>
          <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", margin: 10 }}>
            <Text>Thành Tiền</Text>
            <Text>141.800 đ</Text>
          </View>
          <View style={{ backgroundColor: "red", marginTop: 30, padding: 3 }}>
            <Button title='Tiến Hành Đặt Hàng'></Button>
          </View>
        </View>
      </View>
    </View>
  )
}
const Frame_c = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: 'center', marginTop: 10, padding: 3 }}>
        <Image source={require("./image/vsmart_live_xanhlon.png")}></Image>
      </View>
      <View style={{ flex: 1, }}>
        <View style={{ justifyContent: "space-between", marginTop: 10, padding: 3 }}>
          <Text><Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text></Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}>
          <Text>(Xem 828 đánh giá)</Text>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}>
          <Text>1.790.000 đ</Text>
          <Text>1.790.000 đ</Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}><Text>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
          <Button title='?'></Button>
        </View>
        <View style={{ justifyContent: "center", marginTop: 20, padding: 3 }}>
          <Button title='4 MÀU-CHỌN MÀU'></Button>
        </View>
        <View style={{ backgroundColor: "red", marginTop: 90 }}>
          <Button title='CHỌN MUA'></Button>
        </View>
      </View>
    </View>
  )
}
const ScreenBlu = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <Image source={require("./image/vsmart_live_xanhbe.png")}></Image>
        <Text>
          Điện Thoại Vsmart Joy 3
          Hàng chính hãng
        </Text>
      </View>
      <View>
        <View>
          <Text>Chọn một màu bên dưới:</Text>
        </View>
        <View>
          <Text style={{ width: 30, height: 30, backgroundColor: "white" }}></Text>
          <Text style={{ width: 30, height: 30, backgroundColor: "red" }}></Text>
          <Text style={{ width: 30, height: 30, backgroundColor: "black" }}></Text>
          <Text style={{ width: 30, height: 30, backgroundColor: "gray" }}></Text>
        </View>
        <View>
          <Button title=''></Button>
        </View>
      </View>
    </View>
  )
}
export default function App() {
  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"green"}}>
      <MyStack/>
    </View>
  );
}
