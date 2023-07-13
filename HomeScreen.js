import React from "react";
import { View ,TextInput,Image, ScrollView,Text,TouchableOpacity} from "react-native";

const HomeScreen=({navigation})=>{
  return(
    <ScrollView>
     <View style={{flex:1}}>

 <View style={{backgroundColor:'blue',height:60,}}>
  
<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/109/109618.png'}}
style={{height:30,width:30,margin:20,tintColor:'white',position:'absolute'}}
/>



</View>
<Text style={{fontSize:30,color:'black',marginLeft:10}}>rigster</Text>
<View style={{marginTop:20}}>
<TextInput style={{alignSelf:'center',borderBottomColor:'red',borderBottomWidth:1,width:'80%',paddingLeft:50,fontSize:22}} placeholder='your name'/>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3237/3237472.png'}} style={{height:30,width:30,borderRadius:49,position:'absolute',left:40,top:10}}/>

</View>
<View>
<TextInput style={{alignSelf:'center',borderBottomColor:'red',borderBottomWidth:1,width:'80%',paddingLeft:50,fontSize:22}} placeholder='Mobile number'/>
<Image source={{uri:'https://i.pinimg.com/564x/69/27/aa/6927aab364de747a87f59686e830c4bf.jpg'}} style={{height:30,width:30,borderRadius:49,position:'absolute',left:40,top:10}}/>

</View>
<View>
<TextInput style={{alignSelf:'center',borderBottomColor:'red',borderBottomWidth:1,width:'80%',paddingLeft:50,fontSize:22}} placeholder='Enter Password'/>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLH2Zge4CVvgkF7DBuAD57nrSBuheiBDFn_g&usqp=CAU'}} style={{height:30,width:30,borderRadius:49,position:'absolute',left:40,top:10}}/>

</View>
<View>
<TextInput style={{alignSelf:'center',borderBottomColor:'red',borderBottomWidth:1,width:'80%',paddingLeft:50,fontSize:22}} placeholder='Enter Re-Password'/>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLH2Zge4CVvgkF7DBuAD57nrSBuheiBDFn_g&usqp=CAU'}} style={{height:30,width:30,borderRadius:49,position:'absolute',left:40,top:10}}/>


</View>


<TouchableOpacity  style={{borderWidth:1,width:'80%',backgroundColor:'blue',padding:10,alignSelf:'center',marginTop:40}}
onPress={()=>navigation.navigate('SignupScreen')}
>
  <Text  style={{textAlign:'center',color:'white',fontSize:22}}>
    Sign-up
  </Text>
</TouchableOpacity>

     </View>
     </ScrollView>
  )
}

export default HomeScreen;




