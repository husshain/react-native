import React, { useState } from "react";
import { ImageBackground, View, StatusBar, FlatList, Text, TouchableOpacity, TextInput } from "react-native";

const demo = () => {

    const [add, setadd] = useState('')

    const [value, setvalue] = useState(true)
    const [name, setname] = useState([

        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },



    ])

    const AddBtn = () => {
        name.push({
            id: demo.length + 1,
    title:add
        },)
        setvalue(!value) 
    }

    const RemoveBtn = () => {
        name.shift(
           
        )
        setvalue(!value) 
    }

    
const AddValue=()=>{
    name.unshift({ "id": "2", "title": "ALLADDIN  MOHAMMED", "releaseYear": "1985" })
    setvalue(!value)
}


const removed=()=>{
    name.pop()
    setvalue(!value)
}


    const renderItem = ({ item }) => (
        <View>
            <Text style={{ fontSize: 33 }}>{item.title}</Text>
        </View>
    );

    return (

        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <FlatList
                data={name}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            />

            <TextInput style={{borderWidth:2,borderColor:'red',fontSize:33}}
            placeholder="ADD PRODUCT"
            onChangeText={(data) => setadd (data)}
            placeholderTextColor='red'
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <TouchableOpacity onPress={()=>{AddValue()}}>
                    <Text style={{ fontSize: 22, backgroundColor: 'red' }}>AddBtn</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={()=>{removed()}}>
                    <Text style={{ fontSize: 22, backgroundColor: 'blue' }}>RemoveBtn</Text>
                </TouchableOpacity>


            </View>




        </View>
    )
}
export default demo;



























