import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import ImagePath from "../assets/Image/Imagepath";


const FlatListScreen = ({navigation}) => {




  return (
    <View style={{ flex: 1 }}>

      <FlatList
        numColumns={2}
        data={[
          { key: 'hart Rate', Images: require('../assets/Image/heang.png'), color: 'blue', texts: '780npm', no: '80-120', textss: 'Healthly' },
          { key: 'Dan', color: 'gray', Images: require('../assets/Image/heang.png'), texts: '200npm', no: '20-130', textss: 'Healthly' },
          { key: 'Dominic', Images: require('../assets/Image/heang.png'), color: 'red', texts: '180npm', no: '30-100', textss: 'Healthly' },
          { key: 'Jackson', Images: require('../assets/Image/heang.png'), color: 'yellow', texts: '150npm', no: '00-10', textss: 'Healthly' },
          { key: 'James', Images: require('../assets/Image/heang.png'), color: 'skyblue', texts: '100npm', no: '80-171', textss: 'Healthly' },
          { key: 'Joel', Images: require('../assets/Image/heang.png'), color: 'pink', texts: '300npm', no: '80-20', textss: 'Healthly' },


        ]}
        renderItem={({ item }) =>
          <View style={{ flex: 1, backgroundColor: item.color, margin: 10, minHeight: 100, marginBottom: 10, padding: 10, borderRadius: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 22 }}>{item.key}</Text>
              <Image style={{ height: 30, width: 30 }} source={item.Images} />

            </View>
            <Text style={{ fontSize: 22, }}>{item.texts}</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 22 }}>{item.no}</Text>
              <Text style={{ fontSize: 22 }}>{item.textss}</Text>
            </View>
          </View>

        } />
       
<TouchableOpacity style={{width:'100%',backgroundColor:'blue',marginTop:30,padding:10,}} onPress={() => navigation.navigate('PixelTech')}>
  <Text style={{fontSize:30,textAlign:'center'}}>otp send</Text>
</TouchableOpacity>
    </View>
  )



}
export default FlatListScreen;