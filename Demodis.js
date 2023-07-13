import React from "react";
import { View,backgroundColoe,Image, Text, TextInput, TouchableOpacity} from "react-native";


const Demodis=({navigation})=>{
  return(
     <View style={{flex:1,backgroundColor:'white'}}>

<Image
  source={{ uri: 'https://image.shutterstock.com/shutterstock/photos/1443622223/display_1500/stock-vector-company-logo-design-simple-logo-design-for-company-flat-design-logo-1443622223.jpg' }}
  style={{ width: 100, height: 100 ,alignSelf:'center',marginTop:20}}
/>
<Text style={{fontSize:20,textAlign:'center',color:'black'}}>लॉग इन करें</Text>

<View style={{padding:20}}>
<Text style={{fontSize:20,color:'black'}}>एंप्लॉय  id</Text>
<TextInput style={{borderBottomColor:'black',borderBottomWidth:2}} placeholder='9352865264'/> 
</View>


<View style={{padding:20}}>
<Text style={{fontSize:20,color:'black'}}>कू्जीका</Text>
<TextInput style={{borderBottomColor:'black',borderBottomWidth:2}}secureTextEntry /> 
</View>

<TouchableOpacity   onPress={()=>navigation.navigate('Demojk')} style={{borderWidth:1,width:'80%',backgroundColor:'blue',padding:10,alignSelf:'center',marginTop:40}}

>
  <Text  style={{textAlign:'center',color:'white',fontSize:22}}>
  लॉग इन करें
  </Text>
</TouchableOpacity>
     </View>
    
  )
}
export default Demodis