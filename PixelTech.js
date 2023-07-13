import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


const PixelTech = ({navigation}) => {
  return (
    <View style={{ flex: 1, }}>
      <TouchableOpacity style={{ width: '60%', height: 40, backgroundColor: 'gray', marginTop: 90, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Demodis')}>
                <Text style={{fontSize:22,textAlign:'center',}}>Next Screen</Text>
                </TouchableOpacity>
      
    </View>
  )
}
export default PixelTech;
