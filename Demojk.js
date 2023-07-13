import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Hader from "../common/Hader";


const Demojk = ({navigation}) => {
  return (
    <View style={{ flex: 1, }}>
      <TouchableOpacity onPress={() => navigation.navigate('Farukh')} style={{backgroundColor:'red'}}>
        <Text style={{fontSize:30,color:'pink'}}>Farukh</Text>





        </TouchableOpacity>
        <Hader />
    
    </View>
  )
}
export default Demojk;