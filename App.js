import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { Rating } from 'react-native-rating-element';
import { FlatList } from 'react-native';
import Lab_c1 from './component/Lab_c/Lab_c';
import Flex from './component/Lab_c/Test';
import Frame_a from './component/Lab_c/Test';
import ListView from './component/ListView/ListView';
import GridView from './component/ListView/GridView';
import Navigation from './component/ListView/Navigation';
import TestNavigation from './component/ListView/Navigation';
import MyStack from './component/ListView/Navigation';
//Do lỗi chia flex ra trong từng compnent nên em gộp chunh nó vào trong app.js
//Màm hình activity a finish
const FrameMain = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
        <View style={{ marginTop: "3,padding:85%", backgroundColor: "white", width: "100%", height: "200px" }}>
          <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", margin: 10 }}>
            <Text>Thành Tiền</Text>
            <Text>141.800 đ</Text>
          </View>
          <View style={{ backgroundColor: "red", marginTop: 85, padding: 3 }}>
            <Button title='Tiến Hành Đặt Hàng'></Button>
          </View>
        </View>
      </View>
    </View>
  )
}
//Đây là màn hình Screen
const Frame_c = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: 'center', marginTop: 10, padding: 3 }}>
        <Image source={require("./image/vsmart_live_xanhlon.png")}></Image>
      </View>
      <View style={{ flex: 1, }}>
        <View style={{ justifyContent: "space-between", marginTop: 10, padding: 3 }}>
          <Text><Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text></Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}>
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
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}>
          <Text>1.790.000 đ</Text>
          <Text>1.790.000 đ</Text>
        </View>
        <View style={{ alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}><Text>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
          <Text> ? </Text>
        </View>
        <View style={{ justifyContent: "center", marginTop: 20, padding: 3, borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>
          <Button color={""} title='4 MÀU-CHỌN MÀU'></Button>
        </View>
        <View style={{ marginTop: 130, padding: 4 }}>
          <Button color={"red"} title='CHỌN MUA'></Button>
        </View>
      </View>
    </View>
  )
}
const ScreenBlu = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 20, justifyContent: "center" }}>
        <View>
          <Image source={require("./image/vsmart_live_xanhbe.png")}></Image>
        </View>
        <View>
          <Text style={{ fontSize: 13, marginRight: 15, marginTop: 20, width: 250, height: 40 }}>
            Điện Thoại Vsmart Joy 3
            Hàng chính hãng
          </Text>
        </View>
      </View>
      <View style={{ flex: 2, flexDirection: "column", backgroundColor: "gray", justifyContent: "space-between" }}>
        <View>
          <Text>Chọn một màu bên dưới:</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "space-between", padding: 10 }}>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "white" }}></Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "red" }}></Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "black" }}></Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "blue" }}></Text>
          </View>
        </View>
        <View style={{ marginBottom: 20, width: "90%", marginLeft: 20 }}>
          <Button title='XONG' color={"red"}></Button>
        </View>
      </View>
    </View>
  )
}
const ScreenRed = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 20, justifyContent: "center" }}>
        <View>
          <Image source={require("./image/vs_red_abe.png")}></Image>
        </View>
        <View>
          <Text style={{ fontSize: 13, marginRight: 15, marginTop: 20, width: 240, height: 40 }}>
            Điện Thoại Vsmart Joy 3
            Hàng chính hãng
          </Text>
          <Text>Màu: đỏ</Text>
          <Text>Cung cấp bởi Tiki Tradding</Text>
          <Text>1.790.000 đ</Text>
        </View>
      </View>
      <View style={{ flex: 2, flexDirection: "column", backgroundColor: "gray", justifyContent: "space-between" }}>
        <View>
          <Text>Chọn một màu bên dưới:</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "space-between", padding: 10, marginBottom: 20 }}>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "white" }}></Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "red" }}></Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "black" }}></Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ width: 85, height: 80, backgroundColor: "blue" }}></Text>
          </View>
        </View>
        <View style={{ marginBottom: 20, width: "90%", marginLeft: 20 }}>
          <Button title='XONG'></Button>
        </View>
      </View>
    </View>
  )
}
const CreenRedLon = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: 'center', marginTop: 10, padding: 3 }}>
        <Image source={require("./image/vs_red_alon.png")}></Image>
      </View>
      <View style={{ flex: 1, }}>
        <View style={{ justifyContent: "space-between", marginTop: 10, padding: 3 }}>
          <Text><Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text></Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}>
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
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}>
          <Text>1.790.000 đ</Text>
          <Text>1.790.000 đ</Text>
        </View>
        <View style={{ alignItems: "center", flexDirection: "row", marginTop: 10, padding: 3 }}><Text>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
          <Text> ? </Text>
        </View>
        <View style={{ justifyContent: "center", marginTop: 20, padding: 3, borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>
          <Button title='4 MÀU-CHỌN MÀU'></Button>
        </View>
        <View style={{ marginTop: 130, padding: 4 }}>
          <Button color={"red"} title='CHỌN MUA'></Button>
        </View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    color:"black"
  }
})
const FrameChinh=()=>{
  return(
    <View>
        
    </View>
  )
}
export default function App() {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <FrameChinh />
    </View>
  );
}
