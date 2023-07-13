import React from 'react';
import { Image, Text, View ,TextInput,TouchableOpacity, ScrollView,Button} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <ScrollView>





    <View style={{ flex: 1,}}>


<View>

</View>




<View style={{backgroundColor:'blue',height:300}}>
<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/109/109618.png'}}
style={{height:30,width:30,margin:20,tintColor:'white'}}
/>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONjRqUVigN61hmQwGhbUCpzRN9Z8slP_hhnG3Frj73Q&s'}} style={{height:130,width:130,alignSelf:'center',borderRadius:60}}/>

<View>
  <Text style={{textAlign:'center',marginTop:20,color:'white',fontSize:32}}>
    english speking
  </Text>
</View>
</View>

<View>
  <Text style={{margin:20,fontSize:30,color:'black',fontWeight:'900'}}>
    Login
  </Text>
<View>
  <TextInput style={{alignSelf:'center',borderBottomColor:'black',borderBottomWidth:1,width:'80%',paddingLeft:50,fontSize:22}} placeholder='Mobile number'/>
  <Image source={{uri:'https://i.pinimg.com/564x/69/27/aa/6927aab364de747a87f59686e830c4bf.jpg'}} style={{height:30,width:30,borderRadius:49,position:'absolute',left:40,top:10}}
  
  />
  </View>
  <View>
  <TextInput style={{alignSelf:'center',borderBottomColor:'black',borderBottomWidth:1,width:'80%',paddingLeft:50,fontSize:22}} placeholder='Your password'/>
  <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLH2Zge4CVvgkF7DBuAD57nrSBuheiBDFn_g&usqp=CAU'}} style={{height:30,width:30,borderRadius:60,position:'absolute',left:40,top:10}}
  
  />
  </View>
</View>
<TouchableOpacity  style={{borderWidth:1,width:'80%',backgroundColor:'blue',padding:10,alignSelf:'center',marginTop:40}}
onPress={()=>navigation.navigate('OtpScreen')}>

  <Text  style={{textAlign:'center',color:'white',fontSize:22}}>
    Login
  </Text>
</TouchableOpacity>

    </View>
    </ScrollView>
  );
}

export default Signup;