import React, { useEffect, useState } from "react";
import { ImageBackground, View ,StatusBar} from "react-native";
import LoopFunction from "./LoopFunction";
 

const LoopShort = () => {
    const[add,setadd]=useState([])


    useEffect(()=>{
    LoopFunction()

 
    },[])

    const LoopFunction=()=>{

        let List=[
            {id:2,size:'XXL'},
            {id:5,size:'XL'},
            {id:4,size:'L'},
            {id:6,size:'XLL'},
            {id:1,size:'L'},
            {id:3,size:'M'},
        ]
        List.sort((a,b)=>(a.id>b.id)?2:1)
        console.log(List)
    
    }
  return (
  
    <View style={{ flex: 1, backgroundColor:'skyblue'}}>
      
      
    </View>
  )
}
export default LoopShort;



























