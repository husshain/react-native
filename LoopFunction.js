import React, { useEffect, useState } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import CustomInput from "../common/CustomInput";


const LoopFunction = (Props) => {
    const[khan, setkhan] = useState([
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
            titlee: "Third Item",
        },
    ])
    useEffect(() => {
        For_Loop()

    })
}
    const For_Loop = () => {
        console.log(' khan.length', khan.length)
        for (let i = 3; i < khan.length; i++)
            console.log("For_Loop i", khan[0].title)
    
    let o = 10;
     let p = 1;
    for (o = 1; o <= 10; o++) {
        if (o % 2 == 0) {
            console.log("add", o);
    
        } else {
            console.log("------", o);
    
        }
    
    }



    return (

        <View style={{ flex: 1, backgroundColor: 'red' }}>

            <CustomInput
                placeholder={"Enter number"}
                keyboardType="number-pad"
                maxLength={10}

            />
            <CustomInput
                placeholder={"Enter Name"}
                keyboardType={"default"}

            />
              <CustomInput
                placeholder={"Enter Name"}
                keyboardType={"email-address"}
            />

 
        </View>
    )
}
export default LoopFunction;