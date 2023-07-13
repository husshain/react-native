
import React, { useState } from "react";
import { TouchableOpacity,Text, View ,ScrollView} from "react-native";


const Counts_functions =()=>{
    const[count,setcount]= useState(0)

  const  NumPlusBtn =()=>{
    setcount(Number(count+1))
  }

  const NumMinusBtn =()=>{
      if(count==0){


      }else{
        if(count>100){
            setcount(Number(count-50))

        }else{
            setcount(Number(count-1))
        }

      }




  }

  const  NumMultiplyBtn =()=>{
     if(count>200&&count<1000){
        setcount(Number(count*3))
     }
     else if(count>1000){
        console.log('=======10000')
        setcount(Number(count*2))

     }else{
         console.log('=======100')
        setcount(Number(count*2))

     }

  }
  const NumDivBtn=()=>{
    setcount(Number(count/2))

  }


 


    return(
<ScrollView   style={{flex:1, backgroundColor:'red',}}>
    <Text style={{fontSize:190,color:'white',textAlign:'center'}}>{count.toFixed(0)}</Text>
<View style={{width:'100%', flexDirection:'row'}}>
<TouchableOpacity onPress={()=>NumPlusBtn()} style={{backgroundColor:'white',width:'49%',margin:10}}>
    <Text style={{fontSize:33,color:'black',backgroundColor:'white',textAlign:'center'}}>+ Plus</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>NumMinusBtn()}  style={{backgroundColor:'white',width:'49%',margin:10}}>
    <Text style={{fontSize:33,color:'black',textAlign:'center'}}>- Minus</Text>
</TouchableOpacity>

</View>


<View style={{width:'100%', flexDirection:'row'}}>
<TouchableOpacity onPress={()=>NumMultiplyBtn()} style={{backgroundColor:'white',width:'49%',margin:10}}>
    <Text style={{fontSize:33,color:'black',backgroundColor:'white',textAlign:'center'}}>* Multiply</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>NumDivBtn()}  style={{backgroundColor:'white',width:'49%',margin:10}}>
    <Text style={{fontSize:33,color:'black',textAlign:'center'}}>/ Div</Text>
</TouchableOpacity>

</View>





</ScrollView>
    )
}
export default Counts_functions;