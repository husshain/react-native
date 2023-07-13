import React from "react";
import { ImageBackground, View ,StatusBar, TouchableOpacity,Text,} from "react-native";

const TestJavaSScreen = () => {
   //1 const ke sat
   const pixel =(a,b) =>{
    x=a+b
    alert (x)
   }


   //2
   const pixeltwo =(a,b,type) =>{
    if (type=='bhavla'){
      y=a+b
      alert(x)
    }


   }
  


  return (
  


    <View style={{ flex: 1, }}>
      
     <TouchableOpacity onPress={() => pixel(3,6)} style={{backgroundColor:'red',marginTop:20}} >
      <Text style={{color:'white',fontSize:22,textAlign:'center'}}>const name = new type(arguments);</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => pixel(2,6,'joya')} style={{backgroundColor:'blue',marginTop:20}} >
      <Text style={{color:'white',fontSize:22,textAlign:'center'}}>farukh</Text>
     </TouchableOpacity>


     <TouchableOpacity onPress={() => pixel(3,9)} style={{backgroundColor:'red',marginTop:20}} >
      <Text style={{color:'white',fontSize:22,textAlign:'center'}}>jk bhai</Text>
     </TouchableOpacity>


     <Text style={{backgroundColor:'pink',marginTop:30,textAlign:'center',fontSize:20}}>pixel</Text>
  
    </View>
  )
}
export default TestJavaSScreen;



























