import React, { useState } from "react";
import {  View ,StatusBar, FlatList, Text, TouchableOpacity, TextInput} from "react-native";

const AddRemove = () => {
    const[addvalue,setaddvalue]=useState('')
    const[value,setvalue]=useState(true)
    const[data,setdata]=useState([
    
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
    ])
    const renderItem = ({ item }) => (
        <View>
            <Text style={{fontSize:33}}>{item.title}</Text>
        </View>
      );


      const AddBtn=()=>{
        data.push({
            id: data.length+1,
            title: addvalue
          },)
          setvalue(!value)
      }


      const RemoveBtn=()=>{

        data.pop()
        setvalue(!value)
      }
      
    
  return (
  
    <View style={{  backgroundColor:'blue'}}>

       
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
      />
     

<View style={{flexDirection:'row',padding:10}}> 
      <TouchableOpacity onPress={()=>{AddBtn()}}>
        <Text style={{fontSize:32,backgroundColor:'red'}}>AddBtn</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>{RemoveBtn()}}>
        <Text style={{fontSize:32,backgroundColor:'green'}}>remove</Text>
      </TouchableOpacity>


       
      </View>

    </View>
  )
}
export default AddRemove;



























