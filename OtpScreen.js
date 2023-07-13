import React from "react";
import { View,Text ,TextInput,Image, TouchableOpacity} from "react-native";
 import OTPTextInput from "react-native-otp-textinput";

const OtpScreen=({navigation})=>{

  
  return(
     <View style={{flex:1,}}>
       <OTPTextInput   
          inputCellLength={2}
          containerStyle={{backgroundColor:'blue'}}
          textInputStyle={{backgroundColor:'white'}}
        />
<TouchableOpacity
        
        onPress={() => navigation.navigate('HomeScreen')}
>
<Text style={{marginTop:60,fontSize:50,color:'red',textAlign:"center"}}>Next</Text>

</TouchableOpacity>

     </View>
  )
}
export default OtpScreen;