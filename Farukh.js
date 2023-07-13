import React from "react";
import { Text, TextInput, View, Image, TouchableOpacity,} from "react-native";
import ImagePath from "../assets/Image/Imagepath";

const Farukh=({navigation})=>{
  return(
     <View style={{flex:1,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
<View style={{height:400,width:'80%',padding:10,backgroundColor:'white',borderRadius:40}}>
<Text style={{fontSize:22,color:'black',textAlign:'center',fontWeight:'700'}}>
  Forget Password
</Text>
<Text style={{fontSize:20,textAlign:'center',marginTop:20}}>
we will send you one time Password <Text style={{fontSize:20,color:'black',fontWeight:'600'}}>(otp)</Text>

</Text>
<View>
<TextInput
style={{borderBottomWidth:3,paddingLeft:50}}
placeholder='Enter mobile no.'
/>
<Image style={{position:'absolute' ,height:45,width:45,Top:20}} source={ImagePath.mobile}/>
</View>
<TouchableOpacity style={{width:'100%',backgroundColor:'blue',marginTop:30,padding:10,}} onPress={() => navigation.navigate('Verify')}>
  <Text style={{fontSize:30,textAlign:'center'}}>otp send</Text>
</TouchableOpacity>
</View>

     </View>
  )
}
export default Farukh;