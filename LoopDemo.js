import React, { useEffect, useState } from "react";
import { ImageBackground, View ,StatusBar, PixelRatio} from "react-native";

const LoopDemo = () => {

const[pixel,setpixel]=useState([])
     
    const jk=[
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
    
    ]
    useEffect(() => {
        For_Loop()

    })
    const For_Loop = () => {
for (let i = 0;i<jk.length; i++) {
  console.log('parvej',pixel)  
  pixel.push(jk[i].title)  
}
    
}

        
    
  return (
    
  
    <View style={{ flex: 1, }}>            
      
     
    </View>
  )
}
export default LoopDemo;